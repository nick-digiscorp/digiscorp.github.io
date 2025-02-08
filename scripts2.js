document.addEventListener('DOMContentLoaded', () => {
    const teamDropdown = document.getElementById('team-dropdown');
    const profilesGrid = document.getElementById('profiles-grid');
    const heading = document.querySelector('.team-profiles h2');
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar__links');

    const teams = {
        'creative-leaders': [
            {
                name: 'Nick Revell',
                role: 'Chief Executive Officer',
                image: 'src/About/Team/NickR.jpg'
            },
            {
                name: 'Joel Miller',
                role: 'Chief Technology Officer',
                image: 'src/About/Team/JoelM.jpg'
            },
            {
                name: 'Jerry R. Vorhies',
                role: 'Production Advisor',
                image: 'src/About/Team/JerryV.jpg'
            }
        ],
   /*     'prod': [
            {
                name: 'Carlos C.',
                role: 'Producer',
                image: 'src/About/Team/CarlosC.JPG'
            },
        ], */
        'development-team': [
            {
                name: 'Abraham E.',
                role: 'Lead Developer',
                image: 'src/About/Team/Abraham_Elfenbaum.png'
            },
            {
                name: 'Ellie M.',
                role: 'Unity Developer',
                image: 'src/About/Team/Ellie_M.jpg'
            },
            {
                name: 'Bryce K.',
                role: 'Unity Developer',
                image: 'src/About/Team/Bryce_Knott.png'
            },

        ],
        'level-design-team': [
            {
                name: 'Daniel K.',
                role: 'Lead Designer',
                image: 'src/About/Team/Daniel_Kitchen.png'
            },
            {
                name: 'Daniel C.',
                role: 'Level Designer',
                image: 'src/About/Team/DanielC.jpg'
            },
            {
                name: 'Jordan R.',
                role: 'Level Designer',
                image: 'src/About/Team/jordanR.jpg'
            },
        ],
    /*    'qa': [
            {
                name: 'Abraham E.',
                role: 'Quality Assurance Lead',
                image: 'src/About/Team/Abraham_Elfenbaum.png'
            },
        ],*/
        'audio': [  
            {
                name: 'Alexis T.',
                role: 'Audio Lead',
                image: 'src/About/Team/AlexisT.jpg'
            },
            {
                name: 'Travis M.',
                role: 'Technical Sound Designer',
                image: 'src/About/Team/TravisM.jpg'
            },
        ],
       /* 'narr': [      
            {
                name: 'Tiago V.',
                role: 'Narrative Designer',
                image: 'src/About/Team/Tiago_Rivera.png'
            },
        ],*/
        'comm': [
            {
                name: 'Hunter G.',
                role: 'Marketing Lead',
                image: 'src/About/Team/hunterG.png'
            },
            {
                name: 'Armando F.',
                role: 'Data Analytics',
                image: 'src/About/Team/Armando_F.jpg'
            },
            {
                name: 'Sarah H.',
                role: 'Community Manager',
                image: 'src/About/Team/sarahH.jpg'
            },
            {
                name: 'Chloe L.',
                role: 'Social Media Manager',
                image: 'src/About/Team/chloeL.jpg'
            },
        ],
        '2d': [

            {
                name: 'Flipsy L.',
                role: '2D Artist',
                image: 'src/About/Team/Flipsy_Lucero.png'
            },
            {
                name: 'Ashley W.',
                role: '2D Artist',
                image: 'src/About/Team/Ashley_W.JPG'
            },
        ],
        '3d': [
            {
                name: 'Joe B.',
                role: '3D Art Lead',
                image: 'src/About/Team/JoeB.jpg'
            },
            {
                name: 'Aresène P.',
                role: '3D Artist',
                image: 'src/About/Team/areseneP.png'
            }
        ],
    };

    const teamNames = {
        'creative-leaders': 'Our Creative Leaders',
        'prod': 'Production Team',
        'development-team': 'Development Team',
        'level-design-team': 'Level Design Team',
        'qa': 'Quality Assurance',
        'audio': 'Audio Team',
        'narr': 'Narrative Team',
        'comm': 'Community Team',
        '2d': '2D Art Team',
        '3d': '3D Art Team',
    };

       function populateProfiles(team) {
        profilesGrid.innerHTML = ''; // Clear existing profiles
        teams[team].forEach(member => {
            const profileCard = document.createElement('div');
            profileCard.classList.add('profile__card');
            profileCard.innerHTML = `
                <div class="profile__image">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <h3>${member.name}</h3>
                <p class="profile__role">${member.role}</p>
            `;
            profilesGrid.appendChild(profileCard);
        });
        heading.textContent = teamNames[team];
    }

    teamDropdown.addEventListener('change', () => {
        const selectedTeam = teamDropdown.value;
        populateProfiles(selectedTeam);
    });

    // Initialize the profiles with the default or stored team
    const savedTeam = localStorage.getItem('selectedTeam') || 'creative-leaders';
    teamDropdown.value = savedTeam;
    populateProfiles(savedTeam);

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navbarLinks.classList.remove('active');
        }
    });
});

