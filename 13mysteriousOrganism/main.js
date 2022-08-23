// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// samples
let array1 = ['G', 'C', 'C', 'G', 'G', 'T', 'T', 'T', 'A', 'G', 'A', 'G', 'G', 'C', 'A']
let array2 = ['T', 'C', 'T', 'G', 'G', 'T', 'T', 'T', 'A', 'G', 'A', 'G', 'A', 'C', 'A']
let pAequor2 = {_specimenNum : 2, _dna: array2}


const pAequorFactory = (orgNum, dnaArray) => {
  return {
    _specimenNum : orgNum,
    _dna : dnaArray,
    get specimenNum() {
      return this._specimenNum
    },
    get dna() {
      return this._dna
    },

    // creates 1 mutated dna of the original dna array
    mutate() {
      mutatedArr = this._dna;
      let z = Math.floor(Math.random() * 15);
      let dnaToMutate = this.dna[z];
      let mutation = returnRandBase()
      if (dnaToMutate === mutation) {
        mutation = returnRandBase()
      } else {
        mutatedArr.splice(z, 1, mutation)
      }
      console.log(z)
      console.log(dnaToMutate)
      console.log(mutation)
      return mutatedArr
      },

      // compares dna properties of two objects
      compareDNA(obj) {
        let filteredArray = [];
        for (i=0; i< this._dna.length; i++) {
            if(this._dna[i] === obj._dna[i]) {
              filteredArray.push(obj._dna[i]);
            }
        }
        let percentage = filteredArray.length / this._dna.length * 100
        return `Specimen number ${obj._specimenNum}'s dna is ${percentage} % similar to the dna of specimen ${this._specimenNum}`
      },

      // return true if dna array consist at leas 60% of 'C' and 'G' elements
      willLikelySurvive() {
        let filteredArray = [];
        for (i=0; i< this._dna.length; i++) {
            if(this._dna[i] === 'C' || this._dna[i] === 'G') {
              filteredArray.push(this._dna[i]);
            }
        }
        let percentage = filteredArray.length / this._dna.length * 100;
        console.log(percentage)
        if (percentage >= 60) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  // creates 30 objects using pAequorFactory
  function creator () {
  for (i=1; i <= 30; i++) {
    pAequorFactory(i, mockUpStrand)
  }
}

// test

//console.log(pAequorFactory(1, array1).specimenNum)
console.log(pAequorFactory(1, array1).dna)
//console.log(pAequorFactory(1, array1).mutate())

console.log(pAequor2._dna)
console.log(pAequorFactory(1, array1).compareDNA(pAequor2))
console.log(pAequorFactory(1, array1).willLikelySurvive())
creator()




