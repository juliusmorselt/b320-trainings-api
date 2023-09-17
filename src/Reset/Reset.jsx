export default function Reset() {
    function resetData () {
        if (window.confirm('Weet je zeker dat je wilt resetten?')) {
            fetch("http://api.training.theburo.nl/reset", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
          } else {
            console.log('Didnt want to reset');
          }
    }
    
    
    return(
        <button onClick={() => resetData()} className="text-white text-lg bg-red-700 px-4 py-2 rounded-lg shadow-lg">Reset Data</button>
    )

}