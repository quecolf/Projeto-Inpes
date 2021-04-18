function getForm() {
    const email = document.getElementById("email").value
    const nome = document.getElementById("name").value
    const aluno = document.getElementById("aluno").checked

    // Pega a lista já cadastrada, se não houver vira um array vazio
    var userList = JSON.parse(localStorage.getItem('userList') || '[]');
// Adiciona pessoa ao cadastro
    userList.push({
        nome: nome,
        email: email,
        role: aluno? "aluno": "professor"
    });

// Salva a lista alterada
    localStorage.setItem("userList", JSON.stringify(userList));

}