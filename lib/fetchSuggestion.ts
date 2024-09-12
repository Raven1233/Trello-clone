import formatTodoForAI from "./formatTodosForAI";

const fetchSuggestion = async(board: Board) => {
    const todos = formatTodoForAI(board);
    console.log(todos);

    const res = await fetch("/api/generateSummary", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"	
        },
        body: JSON.stringify({todos}),

    })

    const GPTdata = (res.ok) ? await res.json() : "GPT-3 rate limit reached. Please try again later.";
    const content = GPTdata;

    return (content !== "GPT-3 rate limit reached. Please try again later.") ? content : "GPT-3.5-turbo rate limit reached. Please try again later.";
}

export default fetchSuggestion;