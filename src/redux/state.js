import rerenderEntireTree from './../render'

let state = {
    sidebar: {
        friends: [
            { id: 1, picture: "https://sib.fm/storage/article/August2021/rOjSxMVNU3mI5yq2ZZAr.jpg", name: 'Vitya' },
            { id: 2, picture: "http://fotogora.ru/wp-content/uploads/2014/07/by-Elena-Shumilova.jpg", name: 'Sveta' },
            { id: 3, picture: "https://www.fotoprizer.ru/img/111116-112740-ft.jpg", name: 'Gena' }
        ]
    },
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you!", likes: "15" },
            { id: 2, message: "I am a programmer", likes: "20" },
        ],
        newPostText: '',
        addPost: () => {
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText,
                likes: 0
            }
            state.profilePage.postsData.push(newPost)
            state.profilePage.newPostText = ''
            rerenderEntireTree(state)
        },
        updateNewPost: (newText) => {
            state.profilePage.newPostText = newText;
            rerenderEntireTree(state)
        }
    },

    dialogsPage: {
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'How is your React?' },
        ],
        dialogsData: [
            { id: '1', name: 'Dima' },
            { id: '2', name: 'Masha' },
            { id: '3', name: 'Sasha' },
            { id: '4', name: 'Ira' },
            { id: '5', name: 'Petya' },
            { id: '6', name: 'Vasya' },
        ],
        newMessageText: '',
        addMessage: () => {
            let newMessage = {
                id: 4,
                message: state.dialogsPage.newMessageText,
            }
            state.dialogsPage.messagesData.push(newMessage)
            state.dialogsPage.newMessageText = ''
            rerenderEntireTree(state)
        },
        updateNewMessage: (newText) => {
            state.dialogsPage.newMessageText = newText;
            rerenderEntireTree(state)
        }
    },
}

export default state