function caculateAvgScore() {
    const mathScore = document.getElementById('mathScore').value;
    console.log(typeof (mathScore), "math score");
    const literatureScore = document.getElementById('literatureScore').value;
    console.log(literatureScore, "literature score");
    const englishScore = document.getElementById('englishScore').value;
    console.log(englishScore, "english score");
    let validMathValue = false
    let validLiteratureValue = false
    let validEnglishValue = false
    if (mathScore <= 10 && mathScore >= 0 && !isNaN(mathScore)) {
        validMathValue = true;
    } else {
        validMathValue = false;
        alert('Hãy điền giá trị điểm toán phù hợp')
    }
    if (literatureScore <= 10 &&  literatureScore >= 0 && !isNaN(literatureScore) ) {
        validLiteratureValue = true
    } else {
        validLiteratureValue = false
        alert('Hãy điền giá trị điểm văn phù hợp')
    }
    if (englishScore <= 10 && englishScore >= 0 && !isNaN(englishScore) ) {
        validEnglishValue = true
    } else {
        validEnglishValue = false
        alert('Hãy điền giá trị điểm Anh phù hợp')
    }
    if (literatureScore === "" || mathScore === "" || englishScore === "") {
        alert('Hãy điền đủ form')
    } else {
        if (validMathValue === true && validEnglishValue === true && validLiteratureValue === true) {
            const AvgScore = (Number(mathScore) + Number(literatureScore) + Number(englishScore))/3
            let studentType = ''
            if (AvgScore >= 8) {
                studentType = 'Học sinh giỏi'
            } else if ( AvgScore < 8 && AvgScore >= 6.5) {
                studentType = 'Học sinh khá'
            } else if ( AvgScore < 6.5 && AvgScore >= 5) {
                studentType = 'Học sinh trung bình'
            } else if ( AvgScore < 5 && AvgScore >= 3.5) {
                studentType = 'Học sinh yếu'
            } else {
                studentType = 'Học sinh kém'
            }
            const fixedAvgScore = AvgScore.toFixed(2)
            alert(`Điểm trung bình: ${fixedAvgScore}; Loại học sinh: ${studentType}`)
        }
    }


}