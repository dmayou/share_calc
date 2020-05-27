class circBuffer {
    constructor(size) {
        this.buffer = Array(size).fill('');
        this.size = size;
    }
    clear()  {
        this.buffer = Array(this.size).fill('');
    }
    getAll() {
        return [...this.buffer];
    }
    add(element) {
        this.buffer.pop();
        this.buffer = [element, ...this.buffer];
    }
}

module.exports=circBuffer;