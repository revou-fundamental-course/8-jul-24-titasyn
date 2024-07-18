document.addEventListener('DOMContentLoaded', () => {
    const bmiForm = document.getElementById('bmiForm');
    const resultSection = document.getElementById('result');
    const resultArticle_pertama = document.getElementById('resultArticle2');
    const generalInformation_pertama = document.getElementById('generalInformation2');
    const resultArticle_kedua = document.getElementById('resultArticle1');
    const generalInformation_kedua = document.getElementById('generalInformation1');
    const resultArticle = document.getElementById('resultArticle');
    const generalInformation = document.getElementById('generalInformation');
    const bmiValueElement = document.getElementById('bmiValue');
    const footer = document.getElementById('footer');
    const bmiCategoryElement = document.getElementById('bmiCategory');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('input-berat-badan').value);
        const height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100;
        
        if (isNaN(weight) || isNaN(height) || height === 0) {
            alert('Masukkan nilai yang valid untuk berat dan tinggi badan.');
            return;
        }

        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.50) {
            category = 'Kekurangan berat badan';
        } else if (bmi >= 18.50 && bmi <= 24.99) {
            category = 'Normal (ideal)';
        } else if (bmi >= 25 && bmi <= 29.99) {
            category = 'Kelebihan berat badan';
        } else {
            category = 'Kegemukan (Obesitas)';
        }

        if (bmi < 18.50){
                resultArticle_pertama.style.display = 'block';
                generalInformation_pertama.style.display = 'block';
        }else if(bmi >= 18.50 && bmi <= 24.99) {
                resultArticle_kedua.style.display = 'block';
                generalInformation_kedua.style.display = 'block';
        }else{
                resultArticle.style.display = 'block';
                generalInformation.style.display = 'block';
        }

        bmiValueElement.textContent = bmi.toFixed(2);
        bmiCategoryElement.textContent = category;

        resultSection.style.display = 'block';
        footer.style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.querySelector(".button.reset");
    const resultSection = document.getElementById("result");
    const resultArticles = document.querySelectorAll(".result-article");
    const generalInformations = document.querySelectorAll(".general-information");

    resetButton.addEventListener("click", function() {
        resultSection.style.display = "none";
        resultArticles.forEach(article => article.style.display = "none");
        generalInformations.forEach(info => info.style.display = "none");
    });
});