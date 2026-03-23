export async function fetchQuizQuestions(amount, difficulty) {
    const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`
    );

    if (!response.ok) {
        throw new Error("Erreur serveur lors de la récupération des questions");
    }

    const data = await response.json();

    if (data.response_code !== 0) {
        throw new Error("Pas assez de questions disponibles pour ces paramètres");
    }

    return data.results;
}