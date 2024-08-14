export const getProjects = () => {
  return [
    {
      id: 1,
      name: "BGC eCommerce App",
      type: "React Project",
      icon: "/public/img/react.png",
      leader: "Eileen",
      team: [
        { name: "Member 1", avatar: "/public/img/a.jpg" },
        { name: "Member 2", avatar: "/public/img/b.jpg" },
        { name: "Member 3", avatar: "/public/img/avatar1.jpg" },
      ],
      extraTeamMembers: 3,
      progress: 78,
    },

    {
      id: 2,
      name: "Falcon Logo Design",
      type: "Figma Project",
      icon: "/public/img/figma.png",
      leader: "Owen",
      team: [
        { name: "Member 1", avatar: "/public/img/avatar.jpg" },
        { name: "Member 2", avatar: "/public/img/avatar2.jpg" },
      ],
      extraTeamMembers: 0,
      progress: 25,
    },

    {
      id: 3,
      name: "Dashboard Design",
      type: "Vuejs Project",
      icon: "/public/img/vue-js.png",
      leader: "Keith",
      team: [
        { name: "Member 1", avatar: "/public/img/p.jpg" },
        { name: "Member 2", avatar: "/public/img/c.jpg" },
        { name: "Member 2", avatar: "/public/img/b.jpg" },
      ],
      extraTeamMembers: 0,
      progress: 62,
    },

    {
      id: 4,
      name: "Foodista mobile app",
      type: "Xamarin Project",
      icon: "/public/img/xamarin.png",
      leader: "Merline",
      team: [
        { name: "Member 1", avatar: "/public/img/avatar1.jpg" },
        { name: "Member 2", avatar: "/public/img/avatar2.jpg" },
        { name: "Member 3", avatar: "/public/img/avatar.jpg" },
      ],
      extraTeamMembers: 8,
      progress: 8,
    },

    {
      id: 5,
      name: "Dojo Email App",
      type: "Python Project",
      icon: "/public/img/python.png",
      leader: "Harmonia",
      team: [
        { name: "Member 1", avatar: "/public/img/avatar.jpg" },
        { name: "Member 2", avatar: "/public/img/avatar2.jpg" },
      ],
      extraTeamMembers: 5,
      progress: 51,
    },

    {
      id: 6,
      name: "Xd Logo Design",
      type: "XD Project",
      icon: "/public/img/Xd-Logo.jpg",
      leader: "Owen",
      team: [{ name: "Member 3", avatar: "/public/img/avatar.jpg" }],
      extraTeamMembers: 0,
      progress: 25,
    },
  ];
};
