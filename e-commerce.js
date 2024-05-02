class RecommendationSystem {
    constructor(userData) {
        this.userData = userData; 
    }
    getRecommendations(userId) {
    
    }
}

const userData = {
    "user1": ["Audi", "Toyota", "Mitsubishi"],
    "user2": ["apples", "mangoes", "banana"],
};
const recommendationSystem = new RecommendationSystem(userData);
const userId = "user1";
const recommendations = recommendationSystem.getRecommendations(userId);
console.log(recommendations); 