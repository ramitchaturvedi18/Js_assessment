/*1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created*/


let nftStorage = [];

function mintNFT(name, batch, uid, course) {
    let nft ={
        name:name,
        batch:batch,
        uid:uid,
        course:course
    };
 
    nftStorage.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftStorage.length; i++) {
        console.log("\nName:" + nftStorage[i].name);
        console.log("batch:" + nftStorage[i].batch);
        console.log("uid:" + nftStorage[i].uid);
        console.log("course:" + nftStorage[i].course);
    }
}

function getTotalSupply() {
    return nftStorage.length;
}

mintNFT("Ramit",2022, "22BCS15597","BE-CSE");
mintNFT("Laksh",2022,"22BGD54756","BCOM");
mintNFT("Pratik", 2022,"22HGF96325","BE-CSE-AI/ML");

console.log("All NFTs are-->:");
listNFTs();

console.log("\ntotal number of NFT's= " + getTotalSupply());
