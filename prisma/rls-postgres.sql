-- Row-Level Security for FoundersDeck (Postgres production)
--
-- Run against the PRODUCTION database only:
--   npm run db:rls
--
-- Strategy:
--   - `foundersdeck_app` is the least-privilege role used at runtime (DATABASE_URL).
--   - Table owner (DIRECT_URL, used by `prisma migrate`) keeps full DDL access.
--   - Every table carrying user data is FORCE ROW LEVEL SECURITY, so even the
--     owner is bound by policies. Policies scope rows to `app.current_user_id`,
--     a session GUC the app sets per request (see src/lib/rls.ts).
--   - `foundersdeck_app` receives only CRUD grants; no DDL, no schema access.

-- 1. Least-privilege runtime role (set a strong password; put it in DATABASE_URL)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'foundersdeck_app') THEN
    CREATE ROLE foundersdeck_app LOGIN PASSWORD 'replace-me';
  END IF;
END
$$;

-- 2. Enable RLS on all user-data tables
ALTER TABLE "User" FORCE ROW LEVEL SECURITY;
ALTER TABLE "PitchDeck" FORCE ROW LEVEL SECURITY;
ALTER TABLE "BusinessPlan" FORCE ROW LEVEL SECURITY;
ALTER TABLE "FinancialProjection" FORCE ROW LEVEL SECURITY;
ALTER TABLE "ContingencyPlan" FORCE ROW LEVEL SECURITY;
ALTER TABLE "Investor" FORCE ROW LEVEL SECURITY;
ALTER TABLE "Meeting" FORCE ROW LEVEL SECURITY;

-- 3. Policies: rows are visible/manipulable only when the session's
--    app.current_user_id matches the row's "userId"
DROP POLICY IF EXISTS user_isolation_select ON "User";
DROP POLICY IF EXISTS user_isolation_modify ON "User";
CREATE POLICY user_isolation_select ON "User"
  USING ("id" = current_setting('app.current_user_id', true));
CREATE POLICY user_isolation_modify ON "User"
  USING ("id" = current_setting('app.current_user_id', true))
  WITH CHECK ("id" = current_setting('app.current_user_id', true));

DROP POLICY IF EXISTS user_isolation_select ON "PitchDeck";
DROP POLICY IF EXISTS user_isolation_modify ON "PitchDeck";
CREATE POLICY user_isolation_select ON "PitchDeck"
  USING ("userId" = current_setting('app.current_user_id', true));
CREATE POLICY user_isolation_modify ON "PitchDeck"
  USING ("userId" = current_setting('app.current_user_id', true))
  WITH CHECK ("userId" = current_setting('app.current_user_id', true));

DROP POLICY IF EXISTS user_isolation_select ON "BusinessPlan";
DROP POLICY IF EXISTS user_isolation_modify ON "BusinessPlan";
CREATE POLICY user_isolation_select ON "BusinessPlan"
  USING ("userId" = current_setting('app.current_user_id', true));
CREATE POLICY user_isolation_modify ON "BusinessPlan"
  USING ("userId" = current_setting('app.current_user_id', true))
  WITH CHECK ("userId" = current_setting('app.current_user_id', true));

DROP POLICY IF EXISTS user_isolation_select ON "FinancialProjection";
DROP POLICY IF EXISTS user_isolation_modify ON "FinancialProjection";
CREATE POLICY user_isolation_select ON "FinancialProjection"
  USING ("userId" = current_setting('app.current_user_id', true));
CREATE POLICY user_isolation_modify ON "FinancialProjection"
  USING ("userId" = current_setting('app.current_user_id', true))
  WITH CHECK ("userId" = current_setting('app.current_user_id', true));

DROP POLICY IF EXISTS user_isolation_select ON "ContingencyPlan";
DROP POLICY IF EXISTS user_isolation_modify ON "ContingencyPlan";
CREATE POLICY user_isolation_select ON "ContingencyPlan"
  USING ("userId" = current_setting('app.current_user_id', true));
CREATE POLICY user_isolation_modify ON "ContingencyPlan"
  USING ("userId" = current_setting('app.current_user_id', true))
  WITH CHECK ("userId" = current_setting('app.current_user_id', true));

DROP POLICY IF EXISTS user_isolation_select ON "Investor";
DROP POLICY IF EXISTS user_isolation_modify ON "Investor";
CREATE POLICY user_isolation_select ON "Investor"
  USING ("userId" = current_setting('app.current_user_id', true));
CREATE POLICY user_isolation_modify ON "Investor"
  USING ("userId" = current_setting('app.current_user_id', true))
  WITH CHECK ("userId" = current_setting('app.current_user_id', true));

-- Meetings are scoped through their parent investor
DROP POLICY IF EXISTS user_isolation_select ON "Meeting";
DROP POLICY IF EXISTS user_isolation_modify ON "Meeting";
CREATE POLICY user_isolation_select ON "Meeting"
  USING (EXISTS (
    SELECT 1 FROM "Investor" i
    WHERE i."id" = "Meeting"."investorId"
      AND i."userId" = current_setting('app.current_user_id', true)
  ));
CREATE POLICY user_isolation_modify ON "Meeting"
  USING (EXISTS (
    SELECT 1 FROM "Investor" i
    WHERE i."id" = "Meeting"."investorId"
      AND i."userId" = current_setting('app.current_user_id', true)
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM "Investor" i
    WHERE i."id" = "Meeting"."investorId"
      AND i."userId" = current_setting('app.current_user_id', true)
  ));

-- 4. Least-privilege grants for the runtime role
GRANT SELECT, INSERT, UPDATE, DELETE ON "User", "PitchDeck", "BusinessPlan",
  "FinancialProjection", "ContingencyPlan", "Investor", "Meeting"
  TO foundersdeck_app;
GRANT USAGE ON SCHEMA public TO foundersdeck_app;