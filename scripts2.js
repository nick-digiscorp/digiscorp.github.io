document.addEventListener('DOMContentLoaded', () => {
    const teamDropdown = document.getElementById('team-dropdown');
    const profilesGrid = document.getElementById('profiles-grid');
    const heading = document.querySelector('.team-profiles h2');

    const teams = {
        'creative-leaders': [
            {
                name: 'Nick Revell',
                role: 'Chief Executive Officer',
                image: 'src/About/Team/NickR.jpg'
            },
            {
                name: 'Mike Slamon',
                role: 'Chief Creative Officer',
                image: 'src/About/Team/MikeS.jpg'
            },
            {
                name: 'Joel Miller',
                role: 'Chief Technology Officer',
                image: 'src/About/Team/JoelM.jpg'
            },
            {
                name: 'Nicholas McKinnis',
                role: 'Chief Design Officer',
                image: 'src/About/Team/NickM.jpg'
            },
            {
                name: 'Jerry R. Vorhies',
                role: 'Chief Production Officer',
                image: 'src/About/Team/JerryV.jpg'
            }
        ],
        'prod': [
            {
                name: 'Carlos C.',
                role: 'Producer',
                image: 'src/About/Team/CarlosC.jpg'
            },
        ],
        'development-team': [
            {
                name: 'Hunter A.',
                role: 'Lead Developer',
                image: 'src/About/Team/Hunter_Adelgren.png'
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
            {
                name: 'Clara N.',
                role: 'Unity Developer',
                image: 'src/About/Team/Clara_N.jpg'
            },
            {
                name: 'Potae T.',
                role: 'Unity Developer',
                image: 'src/About/Team/PotaeT.jpg'
            },
            {
                name: 'Alex B.',
                role: 'Unity Developer',
                image: 'src/About/Team/AlexB.jpg'
            },
        ],
        'level-design-team': [
            {
                name: 'Daniel K.',
                role: 'Lead Designer',
                image: 'src/About/Team/Daniel_Kitchen.png'
            },
            {
                name: 'Glen C.',
                role: 'Level Designer',
                image: 'src/About/Team/GlenC.jpg'
            },
            {
                name: 'Mike M.',
                role: 'Level Designer',
                image: 'src/About/Team/MikeM.jpg'
            },
            {
                name: 'Daniel C.',
                role: 'Level Designer',
                image: 'src/About/Team/DanielC.jpg'
            },
            {
                name: 'Daniel W.',
                role: 'Level Designer',
                image: 'src/About/Team/Daniel_Woodell.png'
            },
        ],
        'qa': [
            {
                name: 'Abraham E.',
                role: 'Quality Assurance Lead',
                image: 'src/About/Team/Abraham_Elfenbaum.png'
            },
        ],
        'audio': [
            {
                name: 'Noah T.',
                role: 'Audio Lead',
                image: 'src/About/Team/NoahT.jpg'
            },            
            {
                name: 'Alexis T.',
                role: 'Sound Designer',
                image: 'src/About/Team/AlexisT.jpg'
            },
            {
                name: 'Travis M.',
                role: 'Technical Sound Designer',
                image: 'src/About/Team/TravisM.jpg'
            },
        ],
        'narr': [
            {
                name: 'John B. IV',
                role: 'Narrative Lead',
                image: 'src/About/Team/John_BlackIV.png'
            },            
            {
                name: 'Aidan W.',
                role: 'Narrative Designer',
                image: 'src/About/Team/Aidan_Wong.png'
            },
            {
                name: 'Dominic Z.',
                role: 'Narrative Designer',
                image: 'src/About/Team/Dominic_Zullo.png'
            },
            {
                name: 'Tiago V.',
                role: 'Narrative Designer',
                image: 'src/About/Team/Tiago_Rivera.png'
            },
        ],
        'comm': [
            {
                name: 'Armando F.',
                role: 'Community Manager',
                image: 'src/About/Team/Armando_F.jpg'
            },
        ],
        '2d': [
            {
                name: 'Tyler C.',
                role: 'Lead 2D Artist',
                image: 'src/About/Team/TylerC.png'
            },
            {
                name: 'Dani F.',
                role: '2D Artist',
                image: 'src/About/Team/Dani_Fields.png'
            },
            {
                name: 'Flipsy L.',
                role: '2D Artist',
                image: 'src/About/Team/Flipsy_Lucero.png'
            },
            {
                name: 'Tessa L.',
                role: 'UI/UX Artist',
                image: 'src/About/Team/Tessa_L.jpg'
            },
            {
                name: 'Ashley W.',
                role: '2D Artist',
                image: 'src/About/Team/Ashley_W.jpg'
            },
            {
                name: 'Eris G.',
                role: '2D Artist',
                image: 'src/About/Team/Eris.jpg'
            },
        ],
        '3d': [
            {
                name: 'Taylor B.',
                role: 'Lead 3D Artist',
                image: 'src/About/Team/Taylor_Benoit.png'
            },
            {
                name: 'Megan F.',
                role: '3D Artist',
                image: 'src/About/Team/Megan_Foy.png'
            },
            {
                name: 'Frannie M.',
                role: '3D Artist',
                image: 'src/About/Team/frannie.png'
            },
            {
                name: 'Joe B.',
                role: '3D Artist',
                image: 'src/About/Team/JoeB.jpg'
            },
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
        profilesGrid.innerHTML = '';
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

        // Update the heading text
        heading.textContent = teamNames[team];

        // Re-trigger the animation
        heading.classList.remove('animate-heading');
        void heading.offsetWidth; // Trigger reflow to reset the animation
        heading.classList.add('animate-heading');
    }

    teamDropdown.addEventListener('change', (e) => {
        const selectedTeam = e.target.value;
        populateProfiles(selectedTeam);
        localStorage.setItem('selectedTeam', selectedTeam);
    });

    // Initialize with the stored team or the default team
    const savedTeam = localStorage.getItem('selectedTeam') || 'creative-leaders';
    teamDropdown.value = savedTeam;
    populateProfiles(savedTeam);

    document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    });
    
});