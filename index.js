const startMsg = document.querySelector("#starting")
const keyStroks = document.querySelector("#keysDiv")
const keyButton = document.querySelector('.keyButton')
const keyCode = document.querySelector('.key-code')



window.addEventListener('keydown', (e) => {
    const keyCodeTextContent = e.key === ' ' ? 'SPACEBAR'
        : e.key === '`' ? 'TILDE(`)'
            : e.key === '`' ? 'TILDE(` )'
                : e.key === ',' ? 'COMMA(,)'
                : e.key === '.' ? 'FULLSTOP(.)'
                    : e.key.toUpperCase()
    startMsg.classList.add("hidden");
    keyStroks.classList.remove("hidden");
    keyButton.textContent = keyCodeTextContent
    keyCode.textContent = e.which

})
