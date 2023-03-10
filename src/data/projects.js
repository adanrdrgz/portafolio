import insuranceImg from "../data/img/insurance.png"
import browserImg from "../data/img/img-browser.png"
import breakingBadImg from "../data/img/breakingbad.png"
import cocktailsImg from "../data/img/cocktails.png"
import cryptoImg from "../data/img/Crypto.png"
class Project {
    constructor(id, title, image, url, description){
        this.id = id
        this.title = title
        this.image = image
        this.url = url
        this.description = description
    }
}

const insurance = new Project(1, "Insurance", insuranceImg ,"https://adanrdrgz.github.io/insurance/", "Calcula el precio de un seguro segun sus variantes")
const imgBrowser = new Project(2, "Image Browser", browserImg, "https://adanrdrgz.github.io/img-browser/", "Buscador de imagenes por tema")
const breakingBad = new Project(3, "Breaking Bad Quotes", breakingBadImg, "https://adanrdrgz.github.io/breaking-bad/", "Busca frases de la famosa serie Breaking Bad")
const cocktails = new Project(4, "Cocktail Recipe", cocktailsImg, "https://adanrdrgz.github.io/cocktails/", "Busca distintas recetas de bebidas segun el ingrediente o el tipo de bebida")
const cryptoCurrency = new Project(5, "Crypto Currency", cryptoImg, "https://adanrdrgz.github.io/crypto-currency/", "Valor de distintas criptomonedas en moneda local")

export const projects = [
    insurance,
    imgBrowser,
    breakingBad,
    cocktails,
    cryptoCurrency
]


