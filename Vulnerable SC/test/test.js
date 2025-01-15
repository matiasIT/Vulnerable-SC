const { expect } = require("chai");

describe("VulnerableBank", function () {
    let vulnerableBank;
    let exploitBank;
    let owner;
    let user;
    let attacker;

    beforeEach(async function () {
        [owner, user, attacker] = await ethers.getSigners();

        const VulnerableBank = await ethers.getContractFactory("VulnerableBank");
        vulnerableBank = await VulnerableBank.deploy();

        const ExploitBank = await ethers.getContractFactory("ExploitBank");
        exploitBank = await ExploitBank.deploy(vulnerableBank.address);
    });

    it("Should demonstrate vulnerability", async function () {
        // Usuario deposita ETH
        await vulnerableBank.connect(user).deposit({ value: ethers.utils.parseEther("1") });
        
        // Verificar balance inicial
        expect(await vulnerableBank.getBalance(user.address)).to.equal(ethers.utils.parseEther("1"));

        // Atacante explota la vulnerabilidad
        await exploitBank.connect(attacker).exploit(user.address);

        // Verificar que el balance fue modificado
        expect(await vulnerableBank.getBalance(user.address)).to.equal(0);
    });
});