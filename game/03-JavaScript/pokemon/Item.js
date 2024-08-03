// 기본 아이템 클래스 정의
class Item {
    constructor(name, buyPrice, sellingPrice) {
        this.name = name;
        this.buyPrice = buyPrice;
        this.sellingPrice = sellingPrice;
        this.quantity = 0;
    }

    // 아이템 사용 메서드 (기본 구현은 없음)
    use(pokemon) {
        console.log(`${this.name}을(를) 사용할 수 없습니다.`);
    }
}
window.Item = Item;

// 회복 아이템 클래스
class HealingItem extends Item {
    constructor(name, healAmount, healStatusCon, buyPrice, sellingPrice, quantity) {
        super(name, buyPrice, sellingPrice, quantity);
        this.healAmount = healAmount;
        this.healStatusCon = healStatusCon; // 상태 회복 조건
    }

    // 아이템 사용 메서드
    use(pokemon) {
        const currentHP = pokemon.stats.currentHP;
        const maxHP = pokemon.stats.maxHP;
        if (this.healAmount){
            pokemon.heal(this.healAmount);
        }
        if (this.healStatusCon) {
            pokemon.healStatus(this.healStatusCon);
        }
        const playerInventory = variables().playerInventory;
        playerInventory.removeItem(this.name);
        
        return (`${pokemon.name}의 체력이 ${maxHP - currentHP} 회복되었다!`);
    }
}
window.HealingItem = HealingItem;

// 능력치 증가 아이템 클래스
class StatBoostItem extends Item {
    constructor(name, boostAmount, buyPrice, sellingPrice, quantity) {
        super(name, buyPrice, sellingPrice, quantity);
        this.boostAmount = boostAmount;
    }

    // 능력치 증가 메서드
    use(pokemon) {
        console.log(`${this.name}을(를) 사용하여 ${pokemon.name}의 능력치를 ${this.boostAmount}만큼 증가시킵니다.`);
        // 여기서 특정 능력치를 증가시키는 로직을 구현할 수 있습니다.
    }
}
window.StatBoostItem = StatBoostItem;

// 다양한 아이템 타입을 처리할 수 있는 맵
const itemTypeMap = {
    "회복": HealingItem,
    "상태회복": HealingItem, // 상태 회복도 회복 아이템으로 처리
    "공격": StatBoostItem,
    
    // 추가 아이템 타입을 여기서 정의할 수 있습니다.
};


// 특정 아이템 이름으로 아이템 생성 함수
function createItem(itemName) {
    const itemData = setup.itemData.find(item => item.name === itemName);
    
    if (!itemData) {
        return (`아이템 "${itemName}"을(를) 찾을 수 없습니다.`);
    }

    const itemClass = itemTypeMap[itemData.type[0]]; // 첫 번째 타입만 사용
    if (itemClass) {
        if (itemClass === HealingItem) {
            return new HealingItem(itemData.name, itemData.healAmount || 0, itemData.healStatusCon, itemData.buyPrice, itemData.sellingPrice, itemData.quantity);
        } else if (itemClass === StatBoostItem) {
            return new StatBoostItem(itemData.name, itemData.attackUpAmount, itemData.buyPrice, itemData.sellingPrice, itemData.quantity);
        }
        // 다른 타입에 대한 추가 로직을 구현할 수 있습니다.
    }

    return (`알 수 없는 아이템 타입: ${itemData.type}`);
}
window.createItem = createItem;

// 인벤토리 클래스 정의
class Inventory {
    constructor() {
        this.items = [];
    }


    addItem(item, quantity) {
        // 이미 존재하는 아이템인지 확인
        const existingItemIndex = this.items.findIndex(i => i.name === item.name);
        
        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity += quantity; // 아이템이 존재하면 수량 증가
        } else {
            // 새로운 아이템 추가
            item.quantity = quantity; // 아이템의 수량 설정
            this.items.push(item);
        }

        return (`${item.name}이(가) 인벤토리에 추가되었습니다.`);
    }

    // 인벤토리에서 아이템 제거
    removeItem(itemName) {
        // 아이템의 인덱스를 찾기
        const existingItemIndex = this.items.findIndex(i => i.name === itemName);
        
        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity -= 1; // 수량 감소
            if (this.items[existingItemIndex].quantity === 0) {
                this.items.splice(existingItemIndex, 1); // 수량이 0이면 아이템 제거
            }
            return (`${itemName}이(가) 인벤토리에서 제거되었습니다.`);
        } else {
            return (`아이템 "${itemName}"이(가) 인벤토리에 없습니다.`);
        }
    }

    // 인벤토리의 아이템 목록 출력
    printInventory() {
        let inventoryList = "인벤토리:\n"; // 초기 메시지 설정
    
        if (this.items.length === 0) {
            return "인벤토리가 비어 있습니다."; // 인벤토리가 비어있을 경우 반환
        }
        else {
            this.items.forEach((itemEntry) => {
                inventoryList += `- ${itemEntry.name} (수량: ${itemEntry.quantity})\n`; // 각 아이템 추가
            });
        }
    
        return inventoryList; // 모든 아이템을 포함한 문자열 반환
    }

    checkItemInInventory() {
        if (Object.keys(this.items).length === 0) {
            return false;
        }
        else {
            return true;
        }
    }

    // 아이템 사용 메서드
    useItem(itemName, pokemon) {
        if (this.items[itemName]) {
            const item = this.items[itemName].item;
            item.use(pokemon);
            this.removeItem(itemName); // 사용 후 인벤토리에서 제거
        }
        else {
            return (`아이템 "${itemName}"이(가) 인벤토리에 없습니다.`);
        }
    }
}
window.Inventory = Inventory;

function createInventory() {
    return new Inventory();
}
window.createInventory = createInventory;

// 아이템 생성 및 인벤토리에 추가
//const itemNames = ["상처약", "상처약", "공격력 강화제"];
//itemNames.forEach(name => {
//    const item = createItemByName(name);
//    if (item) {
//        inventory.addItem(item);
//    }
//});

// 예제 사용
//const pikachu = new Pokemon('피카츄', 50, 100);
//pikachu.printStatus();

// 아이템 생성 및 사용
//const item = createItemByName(itemName);

//if (item) {item.use(pikachu);}

// 포켓몬의 체력 확인
//pikachu.printStatus();