function abb(name) {
    const parts = name.split(' ');
    let abb = '';
    for (let i = 0; i < parts.length - 1; i++) {
        abb = abb+parts[i].charAt(0).toUpperCase() + '. ';
    }
    abb = abb+ parts[parts.length - 1];
    return abb ;
}
console.log(abb('Rabindra Nath Tagore'));