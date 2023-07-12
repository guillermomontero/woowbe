export class HashTable {
  table: number[];
  size: number;

  constructor(count: number) {
    this.table = new Array(count);
    this.size = 0;
  }
  
  _hash(hashKey: string) {
    let hash = 0;
    
    for (let i = 0; i < hashKey.length; i++) {
      hash += hashKey.charCodeAt(i);
    }
    
    return hash % this.table.length;
  }
  
  set(hashKey: string, value: number) {
    const idx = this._hash(hashKey);
    
    if (this.table[idx]) {
      for(let i = 0; i < this.table[idx].length; i++) {
        // Si encuenta par clave-valor en el array
        if (this.table[idx][i][0] === hashKey) {
          this.table[idx][i][1] = value;
          return;
        }
      }
      
      // Si no encuentra par clave-valor en el array
      this.table[idx].push([hashKey, value]);
    } else {
      this.table[idx] = [];
      this.table[idx].push([hashKey, value]);
    }
    
    this.size ++;
  }
  
  get(hashKey: string) {
    const idx = this._hash(hashKey);

    if (this.table[idx]) {
      for(let i = 0; i < this.table.length; i++) {
        if (this.table[idx][i][0] === hashKey) {
          console.log(this.table)
          return this.table[idx][i][1];
        }
      }
    }
    
    return undefined;
  }
  
  remove(hashKey: string) {
    const idx = this._hash(hashKey);
    
    if (this.table[idx] && this.table[idx].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[idx][i][0] === hashKey) {
          this.table[idx].splice(i, 1);
          this.size--;
          
          return true;
        }
      }
    }
    
    return false;
  }
  
  show() {
    this.table.forEach((values, idx) => {
      const chainingValues = values.map(
        ([hashKey, value]) => `[ ${hashKey}: ${value} ]`
      );
      console.log(`${idx}: ${chainingValues}`);
    });
  }
};