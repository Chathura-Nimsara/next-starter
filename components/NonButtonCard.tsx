import Card from "./Card";

const cardData = [
    {
      title: "We grasp the climate change issues at the root causes",
      content: "A fundamental lack of visibility into the impact of climate change due to development exists. SusDev OS helps bridge the gap.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V10.2547C17.8135 11.5196 19 13.6213 19 16C19 19.866 15.866 23 12 23C8.13401 23 5 19.866 5 16C5 13.6213 6.18652 11.5196 8 10.2547V5ZM9.1442 11.8951C7.80943 12.8261 7 14.3432 7 16C7 18.7614 9.23858 21 12 21C14.7614 21 17 18.7614 17 16C17 14.3432 16.1906 12.8261 14.8558 11.8951L14 11.2981V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V11.2981L9.1442 11.8951ZM11 12.126V5H13V12.126C14.7252 12.5701 16 14.1362 16 16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16C8 14.1362 9.27477 12.5701 11 12.126ZM12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z'%3E%3C/path%3E%3C/svg%3E",
      button: <button></button>
    },
    {
        title: "The power of open-source",
        content: "Giving you complete visibility into the security and technologies at work. We let you customize and use SusDev OS free.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M12.6727 1.61162 20.7999 9H17.8267L12 3.70302 6 9.15757V19.0001H11V21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001 11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162ZM14 11H23V18H14V11ZM16 13V16H21V13H16ZM24 21H13V19H24V21Z'%3E%3C/path%3E%3C/svg%3E",
        button: <button></button>
      },
      {
        title: "A decentralized OS network that feeds global dashboards",
        content: "With your consent, SusDev OS updates global climate dashboards with real-time progress data.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z'%3E%3C/path%3E%3C/svg%3E",
        button: <button></button>
      },
      {
        title: "Why are we addressing the full spectrum of climate frameworks",
        content: "Information silos cloud climate data, slowing MRV emissions processes. With experts, we chose the tougher, correct path.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M10.9999 2.04938L11 5.07088C7.6077 5.55612 5 8.47352 5 12C5 15.866 8.13401 19 12 19C13.5723 19 15.0236 18.4816 16.1922 17.6064L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L17.6064 16.1922C18.2926 15.2759 18.7595 14.1859 18.9291 13L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L18.9291 10.9998C18.4905 7.93452 16.0661 5.50992 13.001 5.07103L13.0011 2.04948Z'%3E%3C/path%3E%3C/svg%3E",
        button: <button></button>
      },
      {
        title: "UNFCCC NDC data from energy, transport, deforestation sectors",
        content: "High emissions in energy, transport, and deforestation impact scope 1-3 calculations. Our AI streamlines tracking and reduces GHGs.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M12.416 3.62407L19.4818 14.2227C19.6349 14.4524 19.5729 14.7629 19.3431 14.9161C19.261 14.9708 19.1645 15 19.0657 15H4.93426C4.65812 15 4.43426 14.7762 4.43426 14.5C4.43426 14.4013 4.46348 14.3048 4.51823 14.2227L11.584 3.62407C11.7372 3.39431 12.0476 3.33222 12.2774 3.4854C12.3323 3.52201 12.3794 3.56914 12.416 3.62407ZM5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17Z'%3E%3C/path%3E%3C/svg%3E",
        button: <button></button>
      },
      {
        title: "How is a project managed with a focus on emissions & foot print",
        content: "Our platform offers a modular design, letting organizations select features for their project management.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z'%3E%3C/path%3E%3C/svg%3E",
        button: <button></button>
      },
    // Add more card data objects as needed
  ];

  export default function Page() {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} image={card.image} button={card.button} />
        ))}
      </div>
    );
  }
