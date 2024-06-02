/*1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created*/


// create a variable to hold  NFT's
let nftStorage = [];

// mintNft function will take some values as parameter and create an object nft using the parameter passed and stored in the variable nftStorage 
function mintNFT (__name , __batch , __uid , __course) {
    let nft ={
        name: __name,
        batch: __batch,
        uid: __uid,
        course: __course
    }
 
    nftStorage.push(nft); 
    
}

// creating a loop that will go through an "array" of NFT's
// and print their data with console.log()
function listNFTs() {
    for (let i = 0; i < nftStorage.length; i++) {
        console.log("\nName:" + nftStorage[i].name);
        console.log("batch:" + nftStorage[i].batch);
        console.log("uid:" + nftStorage[i].uid);
        console.log("course:" + nftStorage[i].course);
    }
}
// printing the total number of NFTs
function getTotalSupply() {
    console.log("Total NFT's ----> " + nftStorage.length);

}

// calling functions below
mintNFT("Ramit",2022, "22BCS15597","BE-CSE");
mintNFT("Laksh",2022,"22BGD54756","BCOM");
mintNFT("Pratik", 2022,"22HGF96325","BE-CSE-AI/ML");
console.log("All NFTs are-->:");
listNFTs();
getTotalSupply();
