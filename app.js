// --- Initial Mock Database ---
const initialThaiDatabase = [
        {
                "id": "thai-1",
                "company": "Agoda",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 65000,
                "status": "Interviewing",
                "notes": "Technical test passed; scheduling technical interview.",
                "date": "2026-05-10"
        },
        {
                "id": "thai-2",
                "company": "Lazada",
                "role": "Senior Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 80000,
                "status": "Applied",
                "notes": "Followed up with HR via LinkedIn.",
                "date": "2026-05-12"
        },
        {
                "id": "thai-3",
                "company": "Shopee",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 90000,
                "status": "Applied",
                "notes": "Pending resume screening.",
                "date": "2026-05-14"
        },
        {
                "id": "thai-4",
                "company": "LINE Thailand",
                "role": "BI Developer",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 75000,
                "status": "Applied",
                "notes": "Application submitted through company portal.",
                "date": "2026-05-15"
        },
        {
                "id": "thai-5",
                "company": "True Corporation",
                "role": "Data Engineer",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 70000,
                "status": "Applied",
                "notes": "Internal referral by alumni.",
                "date": "2026-05-16"
        },
        {
                "id": "thai-6",
                "company": "SCB X",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 68000,
                "status": "Interviewing",
                "notes": "HR screening completed. Awaiting hiring manager round.",
                "date": "2026-05-18"
        },
        {
                "id": "thai-7",
                "company": "Kasikorn Business-Technology Group (KBTG)",
                "role": "Machine Learning Engineer",
                "city": "Nonthaburi",
                "locationType": "Hybrid",
                "salary": 85000,
                "status": "Applied",
                "notes": "Submitted portfolio alongside application.",
                "date": "2026-05-19"
        },
        {
                "id": "thai-8",
                "company": "Ascend Group",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Offer",
                "notes": "Received offer letter; reviewing benefits package.",
                "date": "2026-05-20"
        },
        {
                "id": "thai-9",
                "company": "Glints Thailand",
                "role": "Data Analytics Consultant",
                "city": "Bangkok",
                "locationType": "Remote",
                "salary": 70000,
                "status": "Applied",
                "notes": "Applied via Glints platform.",
                "date": "2026-05-21"
        },
        {
                "id": "thai-10",
                "company": "Prudential Thailand",
                "role": "Business Intelligence Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 65000,
                "status": "Rejected",
                "notes": "Position filled internally.",
                "date": "2026-05-22"
        },
        {
                "id": "thai-11",
                "company": "Central Group",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Pending response.",
                "date": "2026-05-23"
        },
        {
                "id": "thai-12",
                "company": "AIS (Advanced Info Service)",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 85000,
                "status": "Applied",
                "notes": "Screening stage.",
                "date": "2026-05-24"
        },
        {
                "id": "thai-13",
                "company": "Foodpanda Thailand",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Remote",
                "salary": 70000,
                "status": "Interviewing",
                "notes": "First round interview scheduled for next week.",
                "date": "2026-05-25"
        },
        {
                "id": "thai-14",
                "company": "Grab Thailand",
                "role": "Operations Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 75000,
                "status": "Applied",
                "notes": "Applied via referral.",
                "date": "2026-05-26"
        },
        {
                "id": "thai-15",
                "company": "Wongnai (LINE Man Wongnai)",
                "role": "Product Analytics Specialist",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 80000,
                "status": "Applied",
                "notes": "Submitted resume.",
                "date": "2026-05-27"
        },
        {
                "id": "thai-16",
                "company": "Krungsri Finnovate",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Application acknowledged.",
                "date": "2026-05-28"
        },
        {
                "id": "thai-17",
                "company": "Bitkub",
                "role": "Data Compliance Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 70000,
                "status": "Applied",
                "notes": "Reviewing job requirements updates.",
                "date": "2026-05-29"
        },
        {
                "id": "thai-18",
                "company": "Seven Eleven (CP ALL)",
                "role": "Supply Chain Data Analyst",
                "city": "Nonthaburi",
                "locationType": "Full-time",
                "salary": 55000,
                "status": "Applied",
                "notes": "Application submitted.",
                "date": "2026-05-30"
        },
        {
                "id": "thai-19",
                "company": "Aitarget",
                "role": "Junior Data Scientist",
                "city": "Bangkok",
                "locationType": "Remote",
                "salary": 60000,
                "status": "Applied",
                "notes": "Online application completed.",
                "date": "2026-05-31"
        },
        {
                "id": "thai-20",
                "company": "Amadeus",
                "role": "Software Engineer - Data",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 90000,
                "status": "Applied",
                "notes": "Awaiting screening results.",
                "date": "2026-06-01"
        },
        {
                "id": "thai-21",
                "company": "Bumrungrad International Hospital",
                "role": "Healthcare Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 65000,
                "status": "Interviewing",
                "notes": "Completed initial panel interview.",
                "date": "2026-06-01"
        },
        {
                "id": "thai-22",
                "company": "Siriraj Hospital",
                "role": "Research Data Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 50000,
                "status": "Applied",
                "notes": "Submitted internal application.",
                "date": "2026-06-02"
        },
        {
                "id": "thai-23",
                "company": "PTT Digital Solution",
                "role": "Data Engineer",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 75000,
                "status": "Applied",
                "notes": "Documents uploaded.",
                "date": "2026-06-02"
        },
        {
                "id": "thai-24",
                "company": "Bangkok Bank",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Awaiting aptitude test link.",
                "date": "2026-06-03"
        },
        {
                "id": "thai-25",
                "company": "Lotus's Thailand",
                "role": "Commercial Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 63000,
                "status": "Applied",
                "notes": "Submitted via corporate site.",
                "date": "2026-06-03"
        },
        {
                "id": "thai-26",
                "company": "Siam Makro",
                "role": "Data Insights Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Under review.",
                "date": "2026-06-03"
        },
        {
                "id": "thai-27",
                "company": "Ananda Development",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Applied via JobsDB.",
                "date": "2026-06-04"
        },
        {
                "id": "thai-28",
                "company": "Minor International",
                "role": "Data Analyst (Hospitality)",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 65000,
                "status": "Applied",
                "notes": "Resume viewed by recruiter.",
                "date": "2026-06-04"
        },
        {
                "id": "thai-29",
                "company": "Flash Express",
                "role": "Logistics Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Rejected",
                "notes": "Salary expectations mismatch.",
                "date": "2026-06-04"
        },
        {
                "id": "thai-30",
                "company": "Monosign",
                "role": "Data Consultant",
                "city": "Chiang Mai",
                "locationType": "Remote",
                "salary": 55000,
                "status": "Applied",
                "notes": "Sent introductory email with portfolio.",
                "date": "2026-06-05"
        },
        {
                "id": "thai-31",
                "company": "Bluebik Group",
                "role": "Data Analytics Consultant",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 85000,
                "status": "Interviewing",
                "notes": "Case study assignment received.",
                "date": "2026-06-05"
        },
        {
                "id": "thai-32",
                "company": "Brikon",
                "role": "Junior Data Analyst",
                "city": "Chonburi",
                "locationType": "Full-time",
                "salary": 45000,
                "status": "Applied",
                "notes": "Applied via JobThai.",
                "date": "2026-06-05"
        },
        {
                "id": "thai-33",
                "company": "MFEC",
                "role": "Business Intelligence Engineer",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 68000,
                "status": "Applied",
                "notes": "Application received confirmation.",
                "date": "2026-06-05"
        },
        {
                "id": "thai-34",
                "company": "Telenor Asia",
                "role": "Regional Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 95000,
                "status": "Applied",
                "notes": "Reviewing requirements.",
                "date": "2026-06-06"
        },
        {
                "id": "thai-35",
                "company": "AIA Thailand",
                "role": "Actuarial Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 75000,
                "status": "Applied",
                "notes": "Submitted via LinkedIn Easy Apply.",
                "date": "2026-06-06"
        },
        {
                "id": "thai-36",
                "company": "Sunday Ins Thailand",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Remote",
                "salary": 80000,
                "status": "Applied",
                "notes": "Awaiting response.",
                "date": "2026-06-06"
        },
        {
                "id": "thai-37",
                "company": "Roojai",
                "role": "Data Analyst",
                "city": "Chonburi",
                "locationType": "Hybrid",
                "salary": 60000,
                "status": "Applied",
                "notes": "Online form filled.",
                "date": "2026-06-06"
        },
        {
                "id": "thai-38",
                "company": "ExxonMobil Thailand",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 70000,
                "status": "Applied",
                "notes": "Applied to global talent pool.",
                "date": "2026-06-07"
        },
        {
                "id": "thai-39",
                "company": "Shell Thailand",
                "role": "Business Analyst (Data)",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 72000,
                "status": "Applied",
                "notes": "Initial screening questionnaire finished.",
                "date": "2026-06-07"
        },
        {
                "id": "thai-40",
                "company": "Nestle Thailand",
                "role": "Data Insights Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 67000,
                "status": "Applied",
                "notes": "Application submitted.",
                "date": "2026-06-07"
        },
        {
                "id": "thai-41",
                "company": "Unilever Thailand",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 73000,
                "status": "Applied",
                "notes": "Awaiting digital assessment round.",
                "date": "2026-06-07"
        },
        {
                "id": "thai-42",
                "company": "L'Oreal Thailand",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 68000,
                "status": "Applied",
                "notes": "Application confirmation email received.",
                "date": "2026-06-07"
        },
        {
                "id": "thai-43",
                "company": "KPMG Thailand",
                "role": "Data Analytics Associate",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 65000,
                "status": "Applied",
                "notes": "Submitted via portal.",
                "date": "2026-06-07"
        },
        {
                "id": "thai-44",
                "company": "PwC Thailand",
                "role": "Data Consultant",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 68000,
                "status": "Applied",
                "notes": "Resume screening ongoing.",
                "date": "2026-06-08"
        },
        {
                "id": "thai-45",
                "company": "Deloitte Thailand",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 75000,
                "status": "Applied",
                "notes": "Awaiting response.",
                "date": "2026-06-08"
        },
        {
                "id": "thai-46",
                "company": "EY Thailand",
                "role": "Data Analytics Consultant",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 66000,
                "status": "Applied",
                "notes": "Application acknowledged.",
                "date": "2026-06-08"
        },
        {
                "id": "thai-47",
                "company": "Muang Thai Life Assurance",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Review process ongoing.",
                "date": "2026-06-08"
        },
        {
                "id": "thai-48",
                "company": "Krungthai Bank",
                "role": "Data Science Associate",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Submitted application documents.",
                "date": "2026-06-08"
        },
        {
                "id": "thai-49",
                "company": "Thanachart Bank",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Application submitted.",
                "date": "2026-06-08"
        },
        {
                "id": "thai-50",
                "company": "Tisco Bank",
                "role": "BI Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 63000,
                "status": "Applied",
                "notes": "Awaiting response.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-51",
                "company": "Kiatnakin Phatra",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 70000,
                "status": "Applied",
                "notes": "Application received.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-52",
                "company": "Land and Houses Bank",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Reviewing documentation.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-53",
                "company": "CIMB Thai",
                "role": "Data Science Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 65000,
                "status": "Applied",
                "notes": "Submitted resume.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-54",
                "company": "Thaicom",
                "role": "Data Engineer",
                "city": "Nonthaburi",
                "locationType": "Full-time",
                "salary": 70000,
                "status": "Applied",
                "notes": "Application acknowledged.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-55",
                "company": "GULF Energy Development",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 75000,
                "status": "Applied",
                "notes": "Application filed.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-56",
                "company": "Banpu",
                "role": "Data Analytics Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 78000,
                "status": "Applied",
                "notes": "Submitted corporate application.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-57",
                "company": "SCG (Siam Cement Group)",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 80000,
                "status": "Applied",
                "notes": "Pending resume check.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-58",
                "company": "Thai Beverage (ThaiBev)",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Review ongoing.",
                "date": "2026-06-09"
        },
        {
                "id": "thai-59",
                "company": "Berli Jucker (BJC)",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Application received.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-60",
                "company": "CP Group",
                "role": "Data Engineer",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 72000,
                "status": "Applied",
                "notes": "Awaiting preliminary check.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-61",
                "company": "Betagro",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Application submitted.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-62",
                "company": "Thai Union Group",
                "role": "Data Insight Analyst",
                "city": "Samut Sakhon",
                "locationType": "Full-time",
                "salary": 65000,
                "status": "Applied",
                "notes": "Submitted application.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-63",
                "company": "Indorama Ventures",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 68000,
                "status": "Applied",
                "notes": "Pending review.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-64",
                "company": "Siam Piwat",
                "role": "Data Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 70000,
                "status": "Applied",
                "notes": "Application accepted for evaluation.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-65",
                "company": "The Mall Group",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Application filed online.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-66",
                "company": "Robinson",
                "role": "Data Insights Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 57000,
                "status": "Applied",
                "notes": "Awaiting review.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-67",
                "company": "Big C Supercenter",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Application submitted.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-68",
                "company": "HomePro",
                "role": "Business Analyst (Data)",
                "city": "Nonthaburi",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Application under initial evaluation.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-69",
                "company": "WHA Corporation",
                "role": "Data Engineer",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 75000,
                "status": "Applied",
                "notes": "Awaiting documentation check.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-70",
                "company": "Origin Property",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Application filed.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-71",
                "company": "AP Thailand",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Under screening.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-72",
                "company": "Pruksa Real Estate",
                "role": "Data Analytics Associate",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Application sent.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-73",
                "company": "Supalai",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Reviewing profile.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-74",
                "company": "Sansiri",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 80000,
                "status": "Applied",
                "notes": "Awaiting technical assessment.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-75",
                "company": "Asset World Corporation (AWC)",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 65000,
                "status": "Applied",
                "notes": "Application submitted.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-76",
                "company": "Centara Hotels & Resorts",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 60000,
                "status": "Applied",
                "notes": "Awaiting response.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-77",
                "company": "Dusit International",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Application filed.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-78",
                "company": "Erawan Group",
                "role": "Data Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 63000,
                "status": "Applied",
                "notes": "Profile under evaluation.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-79",
                "company": "Nok Air",
                "role": "Data Analyst (Operations)",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Submitted via airline careers page.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-80",
                "company": "AirAsia Thailand",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Hybrid",
                "salary": 68000,
                "status": "Applied",
                "notes": "Awaiting screening result.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-81",
                "company": "Bangkok Airways",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Application received.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-82",
                "company": "Thai Airways",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 80000,
                "status": "Applied",
                "notes": "Submitted profile.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-83",
                "company": "Kerry Express Thailand",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Application under review.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-84",
                "company": "JWD InfoLogistics",
                "role": "Data Engineer",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 70000,
                "status": "Applied",
                "notes": "Application submitted.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-85",
                "company": "Triple i Logistics",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Awaiting initial checks.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-86",
                "company": "Samitivej Hospital",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 65000,
                "status": "Applied",
                "notes": "Application acknowledged.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-87",
                "company": "BDMS (Bangkok Dusit Medical Services)",
                "role": "Data Scientist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 85000,
                "status": "Applied",
                "notes": "Profile under validation.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-88",
                "company": "Phyathai Hospital",
                "role": "Data Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Submitted documentation.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-89",
                "company": "Praram 9 Hospital",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Application successfully processed.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-90",
                "company": "Vibhavadi Hospital",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Application listed under review.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-91",
                "company": "Yanhee Hospital",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 55000,
                "status": "Applied",
                "notes": "Initial screening stage.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-92",
                "company": "Thonburi Hospital",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Profile created.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-93",
                "company": "Ramkhamhaeng Hospital",
                "role": "Data Specialist",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 62000,
                "status": "Applied",
                "notes": "Application sent.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-94",
                "company": "Chularat Hospital",
                "role": "Data Analyst",
                "city": "Samut Prakan",
                "locationType": "Full-time",
                "salary": 58000,
                "status": "Applied",
                "notes": "Application registered.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-95",
                "company": "BCH (Bangkok Chain Hospital)",
                "role": "Data Analyst",
                "city": "Nonthaburi",
                "locationType": "Full-time",
                "salary": 60000,
                "status": "Applied",
                "notes": "Awaiting check.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-96",
                "company": "Mahidol University",
                "role": "Research Assistant (Data Science)",
                "city": "Nakhon Pathom",
                "locationType": "Full-time",
                "salary": 45000,
                "status": "Applied",
                "notes": "Submitted academic CV.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-97",
                "company": "Chulalongkorn University",
                "role": "Data Analytics Officer",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 42000,
                "status": "Applied",
                "notes": "Application processed.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-98",
                "company": "Kasetsart University",
                "role": "Data System Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 40000,
                "status": "Applied",
                "notes": "Awaiting evaluation.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-99",
                "company": "King Mongkut's University (KMUTT)",
                "role": "Data Analyst",
                "city": "Bangkok",
                "locationType": "Full-time",
                "salary": 43000,
                "status": "Applied",
                "notes": "Application acknowledged.",
                "date": "2026-06-10"
        },
        {
                "id": "thai-100",
                "company": "Thammasat University",
                "role": "Data Officer",
                "city": "Pathum Thani",
                "locationType": "Full-time",
                "salary": 41000,
                "status": "Applied",
                "notes": "Documents filed.",
                "date": "2026-06-10"
        }
];

let applications = [];
let timelineChartInstance = null;
let distributionChartInstance = null;
let confirmCallback = null;
let currentSearchQuery = "";

window.onload = function() {
    lucide.createIcons();
    
    // Check premium status
    isPremium = localStorage.getItem('is_premium_user_v1') === 'true';
    updatePremiumUI();
    
    // Load app theme
    const savedTheme = localStorage.getItem('app_theme_v1') || 'classic';
    changeAppTheme(savedTheme);
    
    const hasSeeded = localStorage.getItem('has_seeded_demo_db_v1');
    if (!hasSeeded) {
        applications = [...initialThaiDatabase];
        saveToLocalStorage();
        localStorage.setItem('has_seeded_demo_db_v1', 'true');
    } else {
        const stored = localStorage.getItem('careers_tracker_db_v1');
        if (stored) {
            try {
                applications = JSON.parse(stored);
            } catch(e) {
                applications = [];
            }
        } else {
            applications = [];
        }
    }
    
    const welcomeModal = document.getElementById('welcome-modal');
    if (welcomeModal) {
        welcomeModal.classList.remove('hidden');
    }
    
    renderAllViews();
    
    document.getElementById('job-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('confirm-cancel-btn').addEventListener('click', closeConfirmModal);
    document.getElementById('confirm-proceed-btn').addEventListener('click', proceedConfirmModal);
};

function saveToLocalStorage() {
    localStorage.setItem('careers_tracker_db_v1', JSON.stringify(applications));
}

function getFilteredApplications() {
    if (!currentSearchQuery) return applications;
    return applications.filter(a => 
        a.company.toLowerCase().includes(currentSearchQuery) || 
        a.role.toLowerCase().includes(currentSearchQuery) || 
        a.city.toLowerCase().includes(currentSearchQuery) ||
        (a.notes && a.notes.toLowerCase().includes(currentSearchQuery))
    );
}

function showCustomConfirm(message, onConfirm) {
    document.getElementById('confirm-modal-text').textContent = message;
    document.getElementById('confirm-modal').classList.remove('hidden');
    confirmCallback = onConfirm;
}

function closeConfirmModal() {
    document.getElementById('confirm-modal').classList.add('hidden');
    confirmCallback = null;
}

function proceedConfirmModal() {
    document.getElementById('confirm-modal').classList.add('hidden');
    const cb = confirmCallback;
    confirmCallback = null;
    if (cb) cb();
}

function closeWelcomeModal() {
    const welcomeModal = document.getElementById('welcome-modal');
    if (welcomeModal) {
        welcomeModal.classList.add('hidden');
    }
}

function triggerResetWorkspace() {
    showCustomConfirm("Are you sure you want to reset the workspace to empty? This will delete all tracked applications.", function() {
        applications = [];
        localStorage.setItem('careers_tracker_db_v1', JSON.stringify([]));
        localStorage.setItem('has_seeded_demo_db_v1', 'true');
        renderAllViews();
        showToast("Workspace Reset", "All application data has been cleared.", "info");
    });
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100/60 border border-transparent";
    });

    ['dashboard', 'board', 'table'].forEach(t => {
        document.getElementById(`tab-${t}`).classList.add('hidden');
    });

    const activeBtn = document.getElementById(`btn-tab-${tabId}`);
    if (activeBtn) {
        activeBtn.className = "tab-btn w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-bold text-slate-900 bg-duck-500/15 border border-duck-500/30 shadow-sm";
    }

    document.getElementById(`tab-${tabId}`).classList.remove('hidden');
    
    if (tabId === 'dashboard') {
        requestAnimationFrame(() => {
            renderCharts();
            renderCitiesBreakdown();
        });
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('sidebar-menu');
    menu.classList.toggle('hidden');
}

// FIX: optimized search logic to strictly filter the active list across views
function handleGlobalSearch(query) {
    currentSearchQuery = query.toLowerCase().trim();
    renderAllViews();
}

// ------------------------------------------------------------
// Local Storage Notice – warn user before leaving/closing the page
// ------------------------------------------------------------
window.addEventListener('beforeunload', function (e) {
    // Message shown in native browser confirmation dialog
    const warningMessage = 'Local Storage Notice:\nYour application data is stored locally in this browser. Closing or refreshing the page will clear all data. Please export a JSON backup before you leave.';
    // Modern browsers require setting returnValue to show the dialog
    e.preventDefault();
    e.returnValue = warningMessage;
    // Return value for legacy browsers
    return warningMessage;
});
function showToast(title, desc, type = "success") {
    const toast = document.getElementById('toast-message');
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-desc').textContent = desc;

    const bgEl = document.getElementById('toast-icon-bg');
    const container = document.getElementById('toast-icon-container');

    let iconName = 'info';
    if (type === 'success') {
        bgEl.className = "p-2 rounded-xl bg-emerald-500 text-white";
        iconName = 'check-circle-2';
    } else if (type === 'error') {
        bgEl.className = "p-2 rounded-xl bg-red-500 text-white";
        iconName = 'alert-triangle';
    } else {
        bgEl.className = "p-2 rounded-xl bg-blue-500 text-white";
        iconName = 'info';
    }

    container.innerHTML = `<i data-lucide="${iconName}" class="w-4 h-4"></i>`;
    lucide.createIcons();

    toast.classList.remove('hidden');
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    });

    if (window._toastTimer) clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(closeToast, 4000);
}

function closeToast() {
    const toast = document.getElementById('toast-message');
    if (toast) {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }
}

// FIX: corrected activities/views mapping
function renderAllViews() {
    renderMetrics();
    if (!document.getElementById('tab-dashboard').classList.contains('hidden')) {
        requestAnimationFrame(renderCharts);
        renderCitiesBreakdown();
    }
    renderRecentActivitiesTable();
    renderKanbanBoard();
    applyTableFilters();
}

function renderMetrics() {
    const filtered = getFilteredApplications();
    const total = filtered.length;
    const applied = filtered.filter(a => a.status === 'Applied').length;
    const interviewing = filtered.filter(a => a.status === 'Interviewing').length;
    const offers = filtered.filter(a => a.status === 'Offer').length;
    
    const totalSalary = filtered.reduce((sum, a) => sum + Number(a.salary || 0), 0);
    const avgSalary = total > 0 ? Math.round(totalSalary / total) : 0;

    document.getElementById('metric-total').textContent = total;
    document.getElementById('metric-applied').textContent = applied;
    document.getElementById('metric-interview').textContent = interviewing;
    document.getElementById('metric-offers').textContent = offers;
    document.getElementById('metric-avg-salary').textContent = avgSalary > 0 
        ? `฿${avgSalary.toLocaleString('en-US')}` 
        : '฿0';
}

function renderCitiesBreakdown() {
    const listContainer = document.getElementById('cities-breakdown-list');
    if (!listContainer) return;

    const filtered = getFilteredApplications();
    const cityCounts = {};
    filtered.forEach(a => {
        cityCounts[a.city] = (cityCounts[a.city] || 0) + 1;
    });

    const sortedCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]);
    const total = filtered.length;

    listContainer.innerHTML = sortedCities.map(([city, count]) => {
        const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
        return `
            <div class="space-y-1">
                <div class="flex items-center justify-between text-slate-500">
                    <span class="font-bold text-slate-700">${city}</span>
                    <span class="text-slate-400 font-medium">${count} (${percentage}%)</span>
                </div>
                <div class="w-full bg-[#F8F9FA] rounded-full h-1.5 overflow-hidden border border-slate-200">
                    <div class="bg-duck-500 h-1.5 rounded-full" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderRecentActivitiesTable() {
    const filtered = getFilteredApplications();
    const recent = [...filtered].slice(0, 4);
    const container = document.getElementById('recent-activities-table');

    if (recent.length === 0) {
        container.innerHTML = `
            <tr>
                <td colspan="4" class="py-6 text-center text-xs text-slate-400 font-bold bg-[#FFFDFB]">
                    No application history found. Add some applications to see stats.
                </td>
            </tr>
        `;
        return;
    }

    container.innerHTML = recent.map(job => {
        let statusBadge = 'badge-rejected';
        if (job.status === 'Applied') statusBadge = 'badge-applied';
        if (job.status === 'Interviewing') statusBadge = 'badge-interviewing';
        if (job.status === 'Offer') statusBadge = 'badge-offer';
        if (job.status === 'Wishlist') statusBadge = 'badge-wishlist';

        return `
            <tr class="hover:bg-slate-50/50 transition-all border-b border-slate-100 text-[11px] font-bold">
                <td class="py-3">
                    <div class="font-bold text-slate-800">${job.company}</div>
                    <div class="text-[10px] text-slate-500 mt-0.5">${job.role}</div>
                </td>
                <td class="py-3">
                    <span class="px-2.5 py-1.5 rounded-xl border text-[9px] font-bold ${statusBadge}">${job.status}</span>
                </td>
                <td class="py-3 text-center text-slate-500">${job.city}</td>
                <td class="py-3 text-right text-slate-400 max-w-[200px] truncate" title="${job.notes || ''}">
                    ${job.notes || '—'}
                </td>
            </tr>
        `;
    }).join('');
}

function renderKanbanBoard() {
    const statuses = ['Applied', 'Interviewing', 'Offer', 'Rejected', 'Wishlist'];
    const filteredApps = getFilteredApplications();
    
    statuses.forEach(status => {
        const column = document.getElementById(`col-${status.toLowerCase()}`);
        const countBadge = document.getElementById(`count-${status.toLowerCase()}`);
        
        let filtered = filteredApps.filter(a => a.status === status);
        countBadge.textContent = filtered.length;

        if (filtered.length === 0) {
            column.innerHTML = `
                <div class="h-24 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-[10px] select-none pointer-events-none font-bold">
                    No applications
                </div>
            `;
            return;
        }

        column.innerHTML = filtered.map(job => {
            let cardClass = 'card-rejected';
            if (job.status === 'Applied') {
                cardClass = 'card-applied';
            } else if (job.status === 'Interviewing') {
                cardClass = 'card-interviewing';
            } else if (job.status === 'Offer') {
                cardClass = 'card-offer';
            } else if (job.status === 'Wishlist') {
                cardClass = 'card-wishlist';
            }

            return `
                <div id="card-${job.id}" draggable="true" ondragstart="dragStart(event, '${job.id}')" ondragend="dragEnd(event)"
                     class="border-l-4 border-y border-r rounded-2xl p-4 space-y-3 cursor-grab active:cursor-grabbing transition-all shadow-sm ${cardClass}">
                    <div class="flex justify-between items-start">
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 tracking-wide leading-snug">${job.company}</h4>
                            <p class="text-[10px] text-slate-400 font-bold leading-none mt-1">${job.role}</p>
                        </div>
                        <div class="flex items-center space-x-1">
                            <button onclick="openEditJobModal('${job.id}')" class="p-1 hover:bg-slate-100/60 text-slate-400 hover:text-slate-800 rounded-lg transition-all">
                                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                            </button>
                            <button onclick="deleteJob('${job.id}')" class="p-1 hover:bg-slate-100/60 text-slate-400 hover:text-red-600 rounded-lg transition-all">
                                <i data-lucide="trash" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between text-[10px] text-slate-500 bg-white/70 p-2 border border-slate-200/40 rounded-xl font-bold">
                        <span class="flex items-center gap-1 text-slate-600">
                            <i data-lucide="map-pin" class="w-3 h-3 text-slate-400"></i> ${job.city}
                        </span>
                        <span class="text-slate-700">฿${Number(job.salary).toLocaleString()}</span>
                    </div>

                    <div class="flex items-center justify-between pt-2.5 border-t border-slate-200/40">
                        <span class="text-[9px] text-slate-600 bg-white/60 px-2 py-0.5 rounded-lg font-bold border border-slate-200/40">${job.locationType}</span>
                        <div class="flex items-center space-x-0.5 bg-white/60 rounded-xl px-2 py-0.5 border border-slate-200/40">
                            <button onclick="shiftStage('${job.id}', -1)" title="Move Left" class="p-0.5 text-slate-400 hover:text-slate-800">
                                <i data-lucide="chevron-left" class="w-3 h-3"></i>
                            </button>
                            <span class="text-[8px] font-bold text-slate-400">Move</span>
                            <button onclick="shiftStage('${job.id}', 1)" title="Move Right" class="p-0.5 text-slate-400 hover:text-slate-800">
                                <i data-lucide="chevron-right" class="w-3 h-3"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    });

    lucide.createIcons();
}

function dragStart(ev, id) {
    ev.dataTransfer.setData("text/plain", id);
    window._draggingId = id;
    setTimeout(() => {
        const card = document.getElementById(`card-${id}`);
        if (card) card.classList.add('opacity-40');
    }, 0);
}

function dragEnd(ev) {
    const id = window._draggingId;
    if (id) {
        const card = document.getElementById(`card-${id}`);
        if (card) card.classList.remove('opacity-40');
        window._draggingId = null;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.add('drag-over');
}

function dragLeave(ev) {
    ev.currentTarget.classList.remove('drag-over');
}

function dropItem(ev, targetStatus) {
    ev.preventDefault();
    ev.currentTarget.classList.remove('drag-over');
    
    const id = ev.dataTransfer.getData("text/plain");
    if (!id) return;

    const jobIndex = applications.findIndex(a => a.id === id);
    
    if (jobIndex > -1 && applications[jobIndex].status !== targetStatus) {
        const oldStatus = applications[jobIndex].status;
        applications[jobIndex].status = targetStatus;
        saveToLocalStorage();
        renderAllViews();
        showToast("Stage Updated", `Moved ${applications[jobIndex].company} to ${targetStatus}.`, "success");
    } else {
        const card = document.getElementById(`card-${id}`);
        if (card) card.classList.remove('opacity-40');
    }
    window._draggingId = null;
}

function shiftStage(id, offset) {
    const stages = ['Applied', 'Interviewing', 'Offer', 'Rejected', 'Wishlist'];
    const jobIndex = applications.findIndex(a => a.id === id);
    if (jobIndex === -1) return;

    const currentIdx = stages.indexOf(applications[jobIndex].status);
    const nextIdx = currentIdx + offset;

    if (nextIdx >= 0 && nextIdx < stages.length) {
        applications[jobIndex].status = stages[nextIdx];
        saveToLocalStorage();
        renderAllViews();
        showToast("Stage Updated", `Changed stage to ${stages[nextIdx]}.`, "success");
    }
}

function applyTableFilters() {
    const statusFilter = document.getElementById('filter-status').value;
    const locationTypeFilter = document.getElementById('filter-location-type').value;
    const employeeTypeFilter = document.getElementById('filter-employee-type') ? document.getElementById('filter-employee-type').value : 'all';
    const cityFilter = document.getElementById('filter-city').value;
    const tableBody = document.getElementById('complete-jobs-table-body');
    
    let filtered = getFilteredApplications();

    if (statusFilter !== 'all') filtered = filtered.filter(a => a.status === statusFilter);
    if (locationTypeFilter !== 'all') filtered = filtered.filter(a => a.locationType === locationTypeFilter);
    if (employeeTypeFilter !== 'all') filtered = filtered.filter(a => a.employeeType === employeeTypeFilter);
    if (cityFilter !== 'all') filtered = filtered.filter(a => a.city === cityFilter);

    document.getElementById('table-results-count').textContent = `Found ${filtered.length} applications`;

    if (filtered.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="p-8 text-center text-xs text-slate-400 font-bold bg-[#FFFDFB]">
                    No matching applications found.
                </td>
            </tr>
        `;
        return;
    }

    tableBody.innerHTML = filtered.map(job => {
        let badgeClass = 'badge-rejected';
        if (job.status === 'Applied') badgeClass = 'badge-applied';
        if (job.status === 'Interviewing') badgeClass = 'badge-interviewing';
        if (job.status === 'Offer') badgeClass = 'badge-offer';
        if (job.status === 'Wishlist') badgeClass = 'badge-wishlist';

        const displayDate = job.date ? job.date : '—';

        return `
            <tr class="hover:bg-slate-50/50 transition-all text-xs text-slate-600">
                <td class="px-4 py-3">
                    <div class="font-bold text-slate-800 text-xs">${job.company}</div>
                    <div class="text-[11px] text-slate-500 mt-0.5 font-semibold">${job.role}</div>
                </td>
                <td class="px-4 py-3 text-[11px] text-slate-400 font-semibold">${displayDate}</td>
                <td class="px-4 py-3 text-[11px] font-semibold text-slate-700">${job.city || '—'}</td>
                <td class="px-4 py-3">
                    <span class="px-2.5 py-1 bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 rounded-xl">${job.locationType || '—'}</span>
                </td>
                <td class="px-4 py-3">
                    <span class="px-2.5 py-1 bg-purple-50 border border-purple-100 text-[10px] font-bold text-purple-600 rounded-xl">${job.employeeType || '—'}</span>
                </td>
                <td class="px-4 py-3 text-right text-[11px] font-bold text-slate-800">฿${Number(job.salary).toLocaleString()}</td>
                <td class="px-4 py-3 text-center">
                    <span class="inline-block text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${badgeClass}">${job.status}</span>
                </td>
                <td class="px-4 py-3 text-right">
                    <div class="flex items-center justify-end space-x-1">
                        <button onclick="openEditJobModal('${job.id}')" class="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-800 rounded-xl transition-colors" title="Edit">
                            <i data-lucide="edit" class="w-3.5 h-3.5"></i>
                        </button>
                        <button onclick="deleteJob('${job.id}')" class="p-1.5 hover:bg-slate-100 text-red-500 hover:text-red-750 rounded-xl transition-colors" title="Delete">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    lucide.createIcons();
}

function openAddJobModal() {
    document.getElementById('job-id').value = '';
    document.getElementById('job-form').reset();
    document.getElementById('job-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('modal-title').textContent = "Add New Application";
    document.getElementById('modal-icon-container').innerHTML = '<i data-lucide="plus" class="w-4 h-4"></i>';
    
    const modal = document.getElementById('job-modal');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        document.getElementById('modal-content').classList.remove('scale-95', 'opacity-0');
    });
    lucide.createIcons();
}

function openEditJobModal(id) {
    const job = applications.find(a => a.id === id);
    if (!job) return;

    document.getElementById('job-id').value = job.id;
    document.getElementById('job-company').value = job.company;
    document.getElementById('job-role').value = job.role;
    document.getElementById('job-status').value = job.status;
    document.getElementById('job-city').value = job.city;
    document.getElementById('job-location-type').value = job.locationType;
    document.getElementById('job-salary').value = job.salary;
    document.getElementById('job-notes').value = job.notes || '';
    document.getElementById('job-date').value = job.date || new Date().toISOString().split('T')[0];

    // Restore pill buttons
    restorePill('work-type-group', 'job-location-type', job.locationType || 'Full-time');
    restorePill('emp-type-group', 'job-employee-type', job.employeeType || 'Permanent');
    document.getElementById('job-employee-type').value = job.employeeType || 'Permanent';

    document.getElementById('modal-title').textContent = "Edit Application";
    document.getElementById('modal-icon-container').innerHTML = '<i data-lucide="edit-3" class="w-4 h-4"></i>';

    const modal = document.getElementById('job-modal');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        document.getElementById('modal-content').classList.remove('scale-95', 'opacity-0');
    });
    lucide.createIcons();
}

function closeJobModal() {
    document.getElementById('modal-content').classList.add('scale-95', 'opacity-0');
    setTimeout(() => document.getElementById('job-modal').classList.add('hidden'), 200);
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const id = document.getElementById('job-id').value;
    
    // Check free tier limit (maximum 5 entries)
    if (!id && applications.length >= 5 && !isPremium) {
        closeJobModal();
        openUpgradeModal();
        return;
    }
    
    const company = document.getElementById('job-company').value.trim();
    const role = document.getElementById('job-role').value.trim();
    const status = document.getElementById('job-status').value;
    const city = document.getElementById('job-city').value;
    const locationType = document.getElementById('job-location-type').value;
    const employeeType = document.getElementById('job-employee-type').value;
    const salary = Number(document.getElementById('job-salary').value);
    const notes = document.getElementById('job-notes').value.trim();
    const date = document.getElementById('job-date').value;

    if (id) {
        const index = applications.findIndex(a => a.id === id);
        if (index > -1) {
            applications[index] = { id, company, role, status, city, locationType, employeeType, salary, notes, date };
            showToast("Saved Successfully", `Updated application for ${company}.`, "success");
        }
    } else {
        const newId = 'job_' + Date.now();
        applications.unshift({ id: newId, company, role, status, city, locationType, employeeType, salary, notes, date });
        showToast("Saved Successfully", `Added application for ${company}.`, "success");
    }

    saveToLocalStorage();
    renderAllViews();
    closeJobModal();
}

function deleteJob(id) {
    const job = applications.find(a => a.id === id);
    if (!job) return;

    showCustomConfirm(`Are you sure you want to delete the application for ${job.company}?`, function() {
        applications = applications.filter(a => a.id !== id);
        saveToLocalStorage();
        renderAllViews();
        showToast("Deleted Successfully", `Deleted application for ${job.company}.`, "info");
    });
}

function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(applications, null, 2));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `Careers_Tracker_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast("Export Successful", "Downloaded JSON backup file.", "info");
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported)) {
                applications = imported;
                saveToLocalStorage();
                renderAllViews();
                showToast("Import Successful", `Successfully imported ${imported.length} applications.`, "success");
            } else {
                showToast("Import Failed", "Invalid JSON data structure.", "error");
            }
        } catch(err) {
            showToast("Import Failed", "Error parsing JSON file.", "error");
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function renderCharts() {
    const timelineCtx = document.getElementById('timelineChart')?.getContext('2d');
    const distributionCtx = document.getElementById('distributionChart')?.getContext('2d');
    if (!timelineCtx || !distributionCtx) return;

    if (timelineChartInstance) { timelineChartInstance.destroy(); timelineChartInstance = null; }
    if (distributionChartInstance) { distributionChartInstance.destroy(); distributionChartInstance = null; }

    const filtered = getFilteredApplications();

    const monthCounts = {};
    filtered.forEach(a => {
        if (a.date) {
            const ym = a.date.substring(0, 7);
            monthCounts[ym] = (monthCounts[ym] || 0) + 1;
        }
    });

    const sortedMonths = Object.keys(monthCounts).sort();
    const monthLabels = sortedMonths.map(ym => {
        const [y, m] = ym.split('-');
        const date = new Date(Number(y), Number(m) - 1);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    });
    const monthData = sortedMonths.map(ym => monthCounts[ym]);

    const tlLabels = monthLabels.length > 0 ? monthLabels : ['May 2026', 'Jun 2026'];
    const tlData = monthData.length > 0 ? monthData : [0, filtered.length];

    timelineChartInstance = new Chart(timelineCtx, {
        type: 'line',
        data: {
            labels: tlLabels,
            datasets: [{
                label: 'Submitted Applications',
                data: tlData,
                borderColor: '#E6CD00',
                borderWidth: 3,
                backgroundColor: 'rgba(255, 230, 18, 0.08)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#B39F00',
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(0, 0, 0, 0.04)' }, ticks: { color: '#94a3b8', precision: 0 } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    const statuses = ['Applied', 'Interviewing', 'Offer', 'Rejected', 'Wishlist'];
    const counts = statuses.map(s => filtered.filter(a => a.status === s).length);

    distributionChartInstance = new Chart(distributionCtx, {
        type: 'doughnut',
        data: {
            labels: statuses,
            datasets: [{
                data: counts,
                backgroundColor: [
                    '#FA6781',
                    '#FFC94D',
                    '#59B292',
                    '#94A3B8',
                    '#FAE7CB'
                ],
                borderWidth: 2,
                borderColor: '#ffffff',
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#64748b',
                        font: { size: 10, weight: 'bold' },
                        padding: 12,
                        boxWidth: 10
                    }
                }
            },
            cutout: '74%'
        }
    });
}

// --- Premium Monetization Features (Version 2) ---
let isPremium = false;
const VALID_LICENSE_KEYS = ['AMRUBYAM', 'DUCKIE', 'RUBYBEDEV', 'PERUBYE', 'RUBY_BI'];

// Pill button selector helper
function selectPill(groupId, hiddenInputId, value, clickedBtn) {
    document.querySelectorAll(`#${groupId} .pill-btn`).forEach(btn => btn.classList.remove('active-pill'));
    clickedBtn.classList.add('active-pill');
    document.getElementById(hiddenInputId).value = value;
}

function restorePill(groupId, hiddenInputId, value) {
    document.getElementById(hiddenInputId).value = value;
    document.querySelectorAll(`#${groupId} .pill-btn`).forEach(btn => {
        btn.classList.remove('active-pill');
        if (btn.textContent.trim().includes(value)) btn.classList.add('active-pill');
    });
}

function openUpgradeModal() {
    const modal = document.getElementById('upgrade-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeUpgradeModal() {
    const modal = document.getElementById('upgrade-modal');
    if (modal) modal.classList.add('hidden');
}

function updatePremiumUI() {
    const lockOverlays = document.querySelectorAll('#dashboard-lock-overlay');
    const lockIndicators = document.querySelectorAll('.lock-indicator');
    
    if (isPremium) {
        lockOverlays.forEach(el => el.classList.add('hidden'));
        lockIndicators.forEach(el => el.classList.add('hidden'));
    } else {
        lockIndicators.forEach(el => el.classList.remove('hidden'));
        // If they are on the dashboard, show the lock overlay
        const lockOverlay = document.getElementById('dashboard-lock-overlay');
        const dashboardTab = document.getElementById('tab-dashboard');
        if (lockOverlay && dashboardTab && !dashboardTab.classList.contains('hidden')) {
            lockOverlay.classList.remove('hidden');
        }
    }
}

function activateLicense(key) {
    const formattedKey = key.trim().toUpperCase();
    if (VALID_LICENSE_KEYS.includes(formattedKey)) {
        isPremium = true;
        localStorage.setItem('is_premium_user_v1', 'true');
        updatePremiumUI();
        closeUpgradeModal();
        showToast("Premium Activated", "Thank you for unlocking Ruby's Premium Workspace! 🎉", "success");
        return true;
    }
    showToast("Invalid Key", "Please check your code or scan the QR code to purchase.", "error");
    return false;
}

function activateLicenseFromModal() {
    const input = document.getElementById('upgrade-license-key');
    if (input) {
        const key = input.value;
        if (activateLicense(key)) {
            input.value = '';
        }
    }
}

function activateLicenseFromDashboard() {
    const input = document.getElementById('dashboard-license-key');
    if (input) {
        const key = input.value;
        if (activateLicense(key)) {
            input.value = '';
        }
    }
}

function handleExportClick() {
    if (!isPremium) {
        openUpgradeModal();
    } else {
        exportData();
    }
}

function handleImportLabelClick(event) {
    if (!isPremium) {
        event.preventDefault(); // Block opening the file selector
        openUpgradeModal();
    }
}

function handleThemeClick(themeId) {
    if (!isPremium) {
        openUpgradeModal();
    } else {
        changeAppTheme(themeId);
        localStorage.setItem('app_theme_v1', themeId);
        showToast("Theme Updated", `Switched color theme to ${themeId}.`, "success");
    }
}

function changeAppTheme(themeId) {
    // Reset body theme class
    const baseClass = "font-sans h-full flex flex-col md:flex-row overflow-hidden bg-[#F8F9FA] text-slate-800";
    if (themeId === 'classic') {
        document.body.className = baseClass;
    } else {
        document.body.className = `${baseClass} theme-${themeId}`;
    }
}
