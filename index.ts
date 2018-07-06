import ld = require('leveldown');
import lu = require('levelup');

let levelup: LevelUpConstructor = lu as any;
export default levelup;

export interface LevelUpConstructor {
    (hostname: string, options?: LevelUpOptions): LevelUp;
    (db: ld.LevelDown, options?: LevelUpOptions): LevelUp;
}

export interface LevelUpOptions {
    createIfMissing?: boolean;
    errorIfExists?: boolean;
    compression?: boolean;
    cacheSize?: number;
    keyEncoding?: Encoding;
    valueEncoding?: Encoding;
    db?: ld.Constructor;
}


export interface LevelUp {
    open(): Promise<any>;
    open(options: ld.OpenOptions): Promise<any>;
    close(): Promise<any>;
    put(key: ld.Bytes, value: ld.Bytes): Promise<any>;
    put(key: ld.Bytes, value: ld.Bytes, options: ld.WriteOptions): Promise<any>;
    get(key: ld.Bytes): Promise<any>;
    get(key: ld.Bytes, options: ld.BufferReadOptions): Promise<any>;
    get(key: ld.Bytes, options: ld.StringReadOptions): Promise<any>;
    del(key: ld.Bytes): Promise<any>;
    del(key: ld.Bytes, options: ld.WriteOptions): Promise<any>;
    batch(operations: ld.Batch[]): Promise<any>;
    batch(operations: ld.Batch[], options?: ld.WriteOptions): Promise<any>;
    approximateSize(start: ld.Bytes, end: ld.Bytes): Promise<any>;
    compactRange(start: ld.Bytes, end: ld.Bytes): Promise<any>;
    getProperty(property: string): string;
    iterator(options?: ld.KeyAsStringIteratorOptions): ld.KeyAsStringIterator;
    iterator(options?: ld.ValueAsStringIteratorOptions): ld.ValueAsStringIterator;
    iterator(options?: ld.KeyAndValueAsStringIteratorOptions): ld.KeyAndValueAsStringIterator;
    iterator(options?: ld.KeyAndValueAsBufferIteratorOptions): ld.KeyAndValueAsBufferIterator;
    destroy(location: string): Promise<any>;
    repair(location: string): Promise<any>;

    batch(): LevelUpChain;
    isOpen(): boolean;
    isClosed(): boolean;
    createReadStream(options?: IteratorOptions): any;
    createKeyStream(options?: IteratorOptions): any;
    createValueStream(options?: IteratorOptions): any;
    createWriteStream(options?: IteratorOptions): any;





    open(callback: ld.ErrCallback): void;
    open(options: ld.OpenOptions, callback: ld.ErrCallback): void;
    close(callback?: ld.ErrCallback): void;
    put(key: ld.Bytes, value: ld.Bytes, callback: ld.ErrCallback): void;
    put(key: ld.Bytes, value: ld.Bytes, options: ld.WriteOptions, callback: ld.ErrCallback): void;
    get(key: ld.Bytes, callback: ld.ErrBufferCallback): void;
    get(key: ld.Bytes, options: ld.BufferReadOptions, callback: ld.ErrBufferCallback): void;
    get(key: ld.Bytes, options: ld.StringReadOptions, callback: ld.ErrStringCallback): void;
    del(key: ld.Bytes, callback?: ld.ErrCallback): void;
    del(key: ld.Bytes, options: ld.WriteOptions, callback?: ld.ErrCallback): void;
    batch(operations: ld.Batch[], callback?: ld.ErrCallback): void;
    batch(operations: ld.Batch[], options?: ld.WriteOptions, callback?: ld.ErrCallback): void;
    approximateSize(start: ld.Bytes, end: ld.Bytes, callback: ld.ErrNumberCallback): void;
    compactRange(start: ld.Bytes, end: ld.Bytes, callback: ld.ErrCallback): void;
    getProperty(property: string): string;
    iterator(options?: ld.KeyAsStringIteratorOptions): ld.KeyAsStringIterator;
    iterator(options?: ld.ValueAsStringIteratorOptions): ld.ValueAsStringIterator;
    iterator(options?: ld.KeyAndValueAsStringIteratorOptions): ld.KeyAndValueAsStringIterator;
    iterator(options?: ld.KeyAndValueAsBufferIteratorOptions): ld.KeyAndValueAsBufferIterator;
    destroy(location: string, callback: ld.ErrCallback): void;
    repair(location: string, callback: ld.ErrCallback): void;
}


export interface LevelUpChain {
    put(key: any, value: any): LevelUpChain;
    put(key: any, value: any, options?: { sync?: boolean }): LevelUpChain;
    del(key: any): LevelUpChain;
    del(key: any, options?: { keyEncoding?: Encoding; sync?: boolean }): LevelUpChain;
    clear(): LevelUpChain;
    write(callback?: (error?: any) => any): LevelUpChain;
}



export interface IteratorOptions {
    gt?: ld.Bytes;
    lt?: ld.Bytes;
    gte?: ld.Bytes;
    lte?: ld.Bytes;
    reverse?: boolean;
    keys?: boolean;
    values?: boolean;
    limit?: number;
    fillCache?: boolean;
    keyAsBuffer?: boolean;
    valueAsBuffer?: boolean;
}

export interface CustomEncoding {
    encode(val: any): Buffer | string;
    decode(val: Buffer | string): any;
    buffer: boolean;
    type: string;
}

export type Encoding = string | CustomEncoding;
