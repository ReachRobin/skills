# Example: Series A-B devtool targeting platform engineering teams

## Input

**ICP:** We sell a developer experience platform to Series A-B B2B devtool companies that have grown past 50 engineers and are starting to feel internal platform fragmentation. The buyer is usually a VP of Engineering or Head of Platform Engineering at a SaaS company with 200-1,000 employees in North America. The trigger is typically internal tooling chaos after a scaling event - a new funding round, a doubling of eng headcount, or a migration off a shared monorepo. Disqualifiers: pre-Series A (no operational budget for tooling), consulting/staffing companies (no in-house eng teams), companies above 1,000 employees (enterprise sales cycle we can't support yet), and companies that already have a dedicated DevEx team of 5+ (they've solved this internally). Buying signals: job postings for "Platform Engineer" or "Developer Experience Engineer," recent LinkedIn posts from engineering leadership about internal tooling debt, GitHub activity on Backstage or Crossplane repos.

---

## Output

### LinkedIn Sales Navigator Filters

**Filter Set A: VP/Head-level buyers**

- **Job Title:** "VP Engineering" OR "VP of Engineering" OR "Head of Platform Engineering" OR "Head of Infrastructure" OR "Director of Engineering" OR "Engineering Manager Platform"
- **Seniority Level:** VP, Director
- **Company Headcount:** 201-500, 501-1,000
- **Industry:** Computer Software, Internet, Information Technology and Services
- **Geography:** United States, Canada
- **Company Type:** Privately Held
- **Account Keywords:** "developer experience" OR "platform engineering" OR "internal developer platform"
- **Exclude titles containing:** "consultant," "staff," "contractor," "freelance"
- **Exclude industries:** Staffing and Recruiting, Management Consulting

Expected volume: roughly 8,000-15,000 results across NAM at these settings. If the Account Keywords filter drops you below 1,000, remove it and rely on headcount + industry.

**Filter Set B: Practitioner-level champions (for a parallel touch)**

- **Job Title:** "Senior Platform Engineer" OR "Staff Platform Engineer" OR "Senior Infrastructure Engineer" OR "Developer Experience Engineer"
- **Seniority Level:** Senior, Staff (use "Individual Contributor" + keywords if Staff isn't available)
- **Company Headcount:** 201-500, 501-1,000
- **Industry:** Computer Software, Internet
- **Geography:** United States, Canada
- **Company Type:** Privately Held

Expected volume: roughly 5,000-10,000. These are bottom-up champions, not economic buyers - use a different message sequence.

---

### Lookalike Sources

**1. Platform engineering job postings (Wellfound + LinkedIn Jobs)**

Search for "Platform Engineer" or "Developer Experience Engineer" on Wellfound (filters: 51-500 employees, Series A or B). Each company actively hiring for this role is signaling they're building or scaling a platform function - exactly the pre-chaos moment. Extract the company list, then find VP/Head-level contacts via Sales Nav Company filter on those specific companies.

Wellfound search URL structure: `wellfound.com/jobs?q=platform+engineer&stage[]=series-a&stage[]=series-b`

**2. Speakers at Platform Engineering Day and related events**

Platform Engineering Day (part of KubeCon) publishes speaker lists publicly on the CNCF schedule site. Search for "Platform Engineering Day 2024" and "Platform Engineering Day 2025" - speaker list is a directory of active practitioners in the space. Most speakers have LinkedIn profiles linked from the conference agenda. Each speaker is likely at a company that cares enough about platform engineering to send a speaker.

Start here: `events.linuxfoundation.org/kubecon-cloudnativecon-north-america/` then navigate to co-located events.

**3. GitHub contributors and recent stargazers on Backstage and Crossplane**

Companies actively contributing to or recently starring the Backstage (Spotify's internal developer portal) and Crossplane (infrastructure-as-code) repos are signaling active investment in internal platform tooling.

- Backstage repo: `github.com/backstage/backstage` - contributors tab, filter to last 6 months of commits
- Crossplane repo: `github.com/crossplane/crossplane` - same approach
- GitHub API: `GET /repos/backstage/backstage/contributors?per_page=100` for bulk extraction

Cross-reference contributor GitHub handles to company affiliations via their GitHub profile or LinkedIn. Filter to the headcount range.

**4. Podcast guests on Software Engineering Daily and The Changelog (platform/infra episodes)**

Software Engineering Daily and The Changelog both cover internal tooling and platform topics explicitly. The guest list for "platform engineering," "developer experience," and "internal tooling" episodes is a self-curated list of practitioners who are publicly articulate about the problem space.

- Software Engineering Daily episode archive: `softwareengineeringdaily.com/category/platform-engineering/`
- The Changelog: `changelog.com/podcast` - search for "platform" or "developer experience"

Extract guest name + company from episode description. Each guest is a practitioner at a company actively working on this problem.

---

### Disqualifier Checks

Run these before adding any name to the list:

- **Pre-Series A:** Check Crunchbase funding tab. Last round listed as "Seed" or "Pre-Seed" with no Series A -> skip. If funding info is blank, check LinkedIn company size; if <50 employees, skip.
- **Consultancy or staffing company:** Check LinkedIn Company Type ("Staffing & Recruiting") or company description. If primary business is services delivery, not a product -> skip.
- **Above 1,000 employees:** Sales Nav headcount filter handles most of this, but verify manually for fast-growing companies - headcount shown in Sales Nav can lag by 3-6 months. Check LinkedIn "People" tab for a count.
- **Already has a dedicated DevEx team of 5+:** Search LinkedIn for people at the company with "Developer Experience" in their title. If you find 5 or more active headcount -> flag as likely self-sufficient. May still be worth a low-effort touch, but deprioritize.
- **Already in your CRM:** Before uploading any batch, export your CRM's existing contacts and accounts, deduplicate by LinkedIn URL or company domain, and remove matches.
