document.addEventListener('DOMContentLoaded', function () {
    const employmentHistory = [
        { id: 1, title: 'Regulatory & Compliance Specialist', company: 'Tech Elevator', years: 'APRIL 2023 - JUNE 2023', description: 'Responsible for the regulatory workflows for military workforce funding programs. Primary responsibilities included mapping approval timelines, identifying challenges and dependencies, and tracking ownership. This role was included in a 25% reduction in company workforce.', bullet1: 'Effectively navigated intricate state and local certificate renewal regulations, ensuring timely approval without expiration.', bullet2: 'Self-developed an intricate project template encompassing diverse educational opportunities focused on future company initiatives.', bullet3: 'Utilized Asana for maximum visibility and ownership tracking', bullet4: 'Connected with State representatives to establish a working relationship' },
        { id: 2, title: 'Military Transition Specialist III', company: 'Galvanize', years: 'MARCH 2021 - NOVEMBER 2022', description: 'Developed an exclusive student support program for up to 60 transitioning service members participating in an 18-week software development program training future military software engineering talent, providing full-cycle guidance to succeed.', bullet1: 'Strategically utilized Asana to enhance military transition guidance, fostering outstanding student success: integrated onboarding, blended learning, training resources, and one-on-one mentoring experiences.', bullet2: 'Cultivated robust and influential relationships while mentoring cohorts of more than 150 engineering students.', bullet3: 'Established operational procedures, allocated resources for critical student concerns, retained sensitive documentation, and optimized student consultations.', bullet4: 'Founded, and was Chairman of, the first chartered Employee Resource Group (ERG).' },
        { id: 3, title: 'Software Engineer Specialist, Military', company: 'Galvanize', years: 'SEPTEMBER 2020 - MARCH 2021', description: 'Co-instructor for a pioneering 12-week Software Engineering Immersive (SEI) program, overseeing 28 active-duty military students in a remote learning environment. Facilitating lectures, projects, office hours, and grading assignments.', bullet1: 'Spearheaded enhancements to the internal Learning Management System curriculum, learning to implement vital additions and revisions on the go.', bullet2: 'Taught Extreme programming of JavaScript/React & Java/Springboot.', bullet3: 'Pioneered and co-managed a military transition support program, which included organizing military culture classes and guiding 35 student-facing employees. These efforts have significantly contributed to the role of the Military Transition Specialist.', bullet4: 'Contributed to launching a collaborative effort into building out multiple streams of military business opportunities.' },
        { id: 4, title: 'Software Engineer Intern', company: 'Galvanize', years: 'MAY 2020 - JUNE 2020', description: 'Software Engineer part of a small team working to learn unfamiliar technologies.', bullet1: 'Created engineering projects independently and collaboratively, emphasizing sustainability in technology.', bullet2: 'Utilized the Kanban methodology to streamline task management, maintained detailed daily journals, and enhanced workflow efficiency.', bullet3: 'Consistently met daily development deliverables, even when working with unfamiliar technologies.', bullet4: 'Participated in bleeding-edge software developments to enhance curriculum design tools' },
        { id: 5, title: 'Patriot Missile Defense Systems Operator (14h)', company: 'US Army', years: 'OCTOBER 2016 - MARCH 2020', description: 'Dedicated team leader with an exemplary service record in operating and maintaining the highly advanced Patriot missile defense system. Proficient in all aspects of system deployment, operation, and maintenance, with a demonstrated ability to execute complex missions under pressure.', bullet1: 'Expertly operated and maintained the Patriot missile defense system, achieving a 100% readiness rate during multiple high-stakes training exercises and real-world deployments.', bullet2: 'Trained and mentored junior personnel, enhancing their proficiency in system operations and maintenance, contributing to the unit\'s overall effectiveness.', bullet3: 'Assisted in developing and implementing new operational procedures, resulting in improved efficiency and mission success rates.', bullet4: 'Missile Defender of the Year: Korean Peninsula 2017' },
        { id: 6, title: 'Guest Service Attendant', company: 'Target', years: 'DECEMBER 2014 - SEPTEMBER 2016', description: 'Demonstrated proficient cash register operations, ensuring accurate transactions, validating coupons, and offering friendly assistance. Quickly progressed to guest services, handling returns, addressing escalated issues, managing inventory, and securing cash transactions.', bullet1: 'Supported front-end operations, optimizing checkout efficiency, facilitating seamless returns and exchanges, maintaining product accuracy, and supervising employee lunch and break schedules to enhance the guest experience.', bullet2: 'Demonstrated a strong commitment to Target\'s values and principles, ensuring a welcoming and inclusive atmosphere for all guests.', bullet3: 'Efficiently supervised the opening and closing of cash operations, maintaining precise financial records for the business.', bullet4: 'Responsible for overseeing front-end staff including Cashiers and Guest Service Attendants.' }
    ];

    const timeline = document.getElementById('timeline');

    employmentHistory.forEach(job => {
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.id = 'entry-' + job.id;

        const header = document.createElement('div');
        header.className = 'entry-header';
        header.innerText = job.title;

        const content = document.createElement('div');
        content.className = 'entry-content';
        content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p> 
                             <ul><li>${job.bullet1}</li><li>${job.bullet2}</li><li>${job.bullet3}</li><li>${job.bullet4}</li></ul>`;
        content.style.display = 'none';

        entry.appendChild(header);
        entry.appendChild(content);

        header.addEventListener('click', function () {
            const isContentShown = content.style.display === 'block';
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none';
            });
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active');
            });
            if (!isContentShown) {
                content.style.display = 'block';
                entry.classList.add('active');
            }
        });
        timeline.appendChild(entry);
    });
});