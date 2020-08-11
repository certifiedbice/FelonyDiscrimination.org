CREATE TABLE endorsements (
  id integer primary key generated by default as identity,
  user_id text not null,
  org_id text not null,
  endorsement boolean not null,
  date_published timestamptz default now() not null
);