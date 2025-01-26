const socialmedia = [
    {
        link: "https://www.instagram.com/p/DADaDKHJ0Ex/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/1.jpg"
    },
    {
        link: "https://www.instagram.com/p/C__UGERpcjp/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/2.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_3wImVsvuh/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/3.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_xXy_PsozU/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/4.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_s_bHXtUAX/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/5.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_jMgvWAq5-/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/6.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_bQ2tlsZDc/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/7.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_WAZKwgtlW/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/8.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_Qdo0SuOAt/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/9.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_LNwANOhcZ/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/10.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_GoNE8tXxh/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/11.jpg"
    },
    {
        link: "https://www.instagram.com/p/C_B2Fj4PCI-/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/12.jpg"
    },
    {
        link: "https://www.instagram.com/p/C-8lg1yOm6P/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/13.jpg"
    },
    {
        link: "https://www.instagram.com/p/C-3EHs4uQ1D/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/14.jpg"
    },
    {
        link: "https://www.instagram.com/p/C-nc8mkv_Qm/",
        img: "https://raw.githubusercontent.com/Yusif-Abbaszade/FakeApi/refs/heads/main/finalProject-data/15.jpg"
    },
]

export const socialmediaReducer = (state=socialmedia, action) => {
    switch(action.type){
        case("GET_SOCIALMEDIA"):
            return state;
        default:
            return state;
    }
}