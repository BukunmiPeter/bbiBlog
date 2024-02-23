import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
import image1 from "../assets/blogPhotos/designed-for-everyone.jpg";
import image2 from "../assets/blogPhotos/beautiful-stories.jpg";
import stock1 from "../assets/blogCards/stock-1.jpg";
import stock2 from "../assets/blogCards/stock-2.jpg";
import stock3 from "../assets/blogCards/stock-3.jpg";
import stock4 from "../assets/blogCards/stock-4.jpg";

Vue.use(Vuex);

const store = new Vuex.Store({
state: {
    blogPosts: [
      {
        blogID:1, blogTitle:"ByteBeat: Unraveling the Symphony of Code", blogCoverPhoto:image2, blogDate:"May 1, 2021", blogHTML:`"ByteBeat: Unraveling the Symphony of Code" takes readers on a captivating journey into the realm where programming meets music. Delving into the art of algorithmic compositions, the blog explores the enchanting synergy created by the intricate interplay of bytes. It unravels the magic behind transforming lines of code into musical notes, revealing how programmers are becoming modern-day composers. The articles not only showcase the technical aspects of ByteBeat but also highlight the creative expression it offers to those who dare to wield the language of code as their musical instrument. From dissecting algorithms that generate mesmerizing melodies to showcasing real-world applications, this blog invites readers to appreciate the poetry in programming. Whether you're a coding enthusiast or a music lover, "ByteBeat" promises to be a symphony of discovery, providing a unique perspective on the harmonious convergence of technology and art in the digital age. Join us as we explore the algorithms that compose the future of music through the elegant dance of ones and zeros.` },    {  blogID:2,
        blogTitle:"Quantum Quest: Navigating the Quantum Computing Landscape", blogCoverPhoto:image1, blogDate:"Jan 6, 2022",blogHTML:`"Quantum Quest: Navigating the Quantum Computing Landscape" delves into the mesmerizing realm of quantum computing, where classical bits give way to qubits, unlocking unprecedented computational power. Embark on a journey through the intricate principles of superposition and entanglement, unraveling the mysteries that govern the behavior of quantum particles.

This blog explores the current state of quantum computing research, detailing breakthroughs in quantum hardware, algorithms, and real-world applications. From quantum supremacy achievements to the race for scalable and error-resistant quantum processors, "Quantum Quest" serves as a guide through the dynamic landscape of this revolutionary technology.

Discover the potential impact of quantum computing on industries ranging from cryptography to optimization problems, and gain insights into how quantum algorithms are reshaping the future of artificial intelligence and machine learning. Stay informed about the latest developments in quantum programming languages and tools, essential for harnessing the capabilities of quantum processors.

"Quantum Quest" is your portal to a world where bits can exist in multiple states simultaneously, and computing power takes a quantum leap. Whether you're a seasoned quantum enthusiast or just starting to grasp the basics, join us on this odyssey as we navigate the ever-evolving quantum computing landscape, unraveling its complexities and envisioning the limitless possibilities that lie ahead.` },    
        {  blogID:3, blogTitle:"Neural Nexus: Exploring the Frontiers of Artificial Intelligence",blogCoverPhoto:stock1, blogDate:"Dec 15, 2022",blogHTML:`Embark on a captivating journey through the Neural Nexus, where we unravel the mysteries of Artificial Intelligence. Delve into the latest advancements, from cutting-edge neural networks to revolutionary machine learning applications. Stay ahead with insightful articles that demystify complex AI concepts, showcase real-world implementations, and explore the ethical implications of intelligent systems. Neural Nexus is your compass in navigating the ever-evolving landscape of AI, providing both enthusiasts and professionals with a deeper understanding of the transformative power and potential pitfalls of artificial intelligence. Join us at the forefront of innovation as we decode the neural secrets shaping the future.` },    {
         blogID:4,blogTitle:"Beyond Silicon: The Evolution of Next-Gen Hardware", blogCoverPhoto:stock2, blogDate:"June 17, 2023" ,blogHTML:`"Beyond Silicon: The Evolution of Next-Gen Hardware" explores the dynamic landscape of emerging hardware technologies. From quantum processors to neuromorphic computing, this blog delves into innovations reshaping traditional silicon paradigms. Discover how these advancements are revolutionizing computing power, energy efficiency, and paving the way for a new era in hardware design. Stay ahead of the curve with insights into the exciting developments propelling technology beyond the limitations of conventional silicon, unlocking unprecedented possibilities for the future of computing.`},
        { blogID:5, blogTitle:"CyberSleuth Chronicles: Navigating the Cybersecurity Landscape", blogCoverPhoto:stock3, blogDate:"Nov 24, 2023",blogHTML:`"CyberSleuth Chronicles: Navigating the Cybersecurity Landscape" takes readers on a thrilling expedition through the ever-evolving world of cybersecurity. From decoding sophisticated cyber threats to unveiling strategies for digital defense, our cyber-sleuths bring you the latest insights and expert analyses. Stay one step ahead with in-depth explorations of emerging technologies, threat intelligence, and practical tips to fortify your online presence. Join us as we unravel the intricate web of cybersecurity, empowering readers to navigate the digital realm safely and confidently. The Chronicles are your go-to source for staying informed in this dynamic and critical field.` }, 
            {
        blogID:6, blogTitle:"CodeCrafters: Mastering the Art and Craft of Programming", blogCoverPhoto:stock4, blogDate:"Jan 5, 2024" ,blogHTML:`"CodeCrafters: Mastering the Art and Craft of Programming" is your go-to resource for aspiring and seasoned developers alike. Delve into the intricacies of coding, where each line is a brushstroke on the canvas of innovation. From debugging dilemmas to design paradigms, we unravel the secrets of software craftsmanship. Join us in exploring the ever-evolving landscape of programming languages, frameworks, and best practices. Whether you're a novice honing your skills or a coding maestro seeking inspiration, CodeCrafters is your compass in the vast world of code, guiding you towards mastery in the art and craft of programming.`}
    ],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);
    },
    blogPostsCards(state) {
      return state.blogPosts.slice(2, 6);
    },
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setBlogState(state, payload) {
      state.blogTitle = payload.blogTitle;
      state.blogHTML = payload.blogHTML;
      state.blogPhotoFileURL = payload.blogCoverPhoto;
      state.blogPhotoName = payload.blogCoverPhotoName;
    },
    filterBlogPost(state, payload) {
      state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
      console.log(state.profileAdmin);
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
      console.log(state.profileId);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }, user) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
      commit("filterBlogPost", payload);
      await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("blogPosts").doc(payload);
      await getPost.delete();
      commit("filterBlogPost", payload);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});

export default store;