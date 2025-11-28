let pronoun = ['the', 'our', 'los', 'grupo', 'asossiation'];
let adj = ['main', 'ultimate', 'wonderful', 'rapids', 'intelligent'];
let noun = ['jogger', 'mexicanos', 'footballer', 'campesinos', 'geeks'];
let extension = ['.com', '.es', '.ios', '.es', '.de', '.pa']

function domainGenerator() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < extension.length; m++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[k]}${extension[m]}`);

        }
      }
    }

  }


}

domainGenerator()