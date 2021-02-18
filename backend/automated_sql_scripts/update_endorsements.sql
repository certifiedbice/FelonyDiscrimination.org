select id,org_name,
	(
	select count(*) 
	from endorsements e
	where e.org_id = o.id
	and e.endorsement = true
	) as pos_count,
	(
	select count(*) 
	from endorsements e
	where e.org_id = o.id
	and e.endorsement = false
	) as neg_count
from organizations o