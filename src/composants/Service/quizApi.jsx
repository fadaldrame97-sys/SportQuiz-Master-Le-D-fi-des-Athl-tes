export async function fetchQuizQuestions(amount, difficulty) {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`
    );
    const data = await response.json();

    if (data.response_code !== 0) {
      throw new Error("Pas assez de questions disponibles");
    }
    return data.results;
  } catch (error) {
    throw error;
  }
}