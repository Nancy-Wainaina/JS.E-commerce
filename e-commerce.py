user_preferences = {'banana'}

def add_user(user_id, preferred_categories):

    user_preferences[user_id] = preferred_categories


def get_recommendations(user_id):

    preferred_categories = user_preferences.get(user_id, [])

    if not preferred_categories:

        return []


    return ["Recommendation1", "Recommendation2", "Recommendation3"]
