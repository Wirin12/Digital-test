function calculateResult() {
    const form = document.getElementById('questionnaire');
    const formData = new FormData(form);
    let score = 0;

    for (let value of formData.values()) {
        score += parseInt(value);
    }

    const resultText = document.getElementById('resultText');
    if (score <= 9) {
        resultText.innerText = 'คุณมีการใช้โทรศัพท์หรืออุปกรณ์ดิจิทัลในระดับที่เหมาะสม และไม่น่าจะต้องการการทำ Digital Detox อย่างเร่งด่วน';
    } else if (score <= 19) {
        resultText.innerText = 'คุณอาจมีการใช้โทรศัพท์หรืออุปกรณ์ดิจิทัลมากเกินไปในบางครั้ง ควรพิจารณาการลดเวลาในการใช้เพื่อสุขภาพที่ดีขึ้น';
    } else if (score <= 29) {
        resultText.innerText = 'คุณมีการใช้โทรศัพท์หรืออุปกรณ์ดิจิทัลในระดับที่ค่อนข้างสูง ควรพิจารณาทำ Digital Detox และจัดสรรเวลาในการใช้เทคโนโลยีให้เหมาะสม';
    } else {
        resultText.innerText = 'คุณมีการใช้โทรศัพท์หรืออุปกรณ์ดิจิทัลมากเกินไป อาจมีผลกระทบต่อสุขภาพและการใช้ชีวิตประจำวัน ควรทำ Digital Detox อย่างจริงจังและหาวิธีการลดการพึ่งพาเทคโนโลยี';
    }

    document.getElementById('result').classList.remove('hidden');
}
