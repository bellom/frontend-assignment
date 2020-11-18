const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */

const getDCHeroes = (heroes) => {
  let array = []
  heroes.forEach(obj => {
    if(obj.publisher === "Marvel Comics") {
      array.push(obj)
    }
  })
  return array;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  let characterArray = []
  heroes.forEach(obj => {
      obj.characters = obj.characters.split(",")
      characterArray.push(obj)
  })
return characterArray;
}


/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let objPublisher = {
      'DC Comics': [],
      'Marvel Comics': []
  }
  heroes.forEach(obj => {
    if(obj.publisher === "DC Comics"){
      objPublisher['DC Comics'].push(obj)
    } else {
      objPublisher['Marvel Comics'].push(obj)
    }
  })

return objPublisher;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  let dcArray = [];
  heroes.forEach(obj => {
     if(obj.publisher === 'DC Comics'){
      let newObj = Array.from(obj.characters)
      newObj.length > 1 ? dcArray.push(obj) : null
     }
  })
  return dcArray;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
