DROP TYPE IF EXISTS organization_type;
CREATE TYPE organization_type AS ENUM (
    'employment',
    'housing'
);

ALTER TABLE organizations
  ADD COLUMN
    org_type organization_type;