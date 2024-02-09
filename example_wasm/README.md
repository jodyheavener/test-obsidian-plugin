# Example WebAssembly

This Rust code is being compiled to WebAssembly in the following ways:

```
cargo build --target wasm32-unknown-unknown --release

wasm-bindgen ./target/wasm32-unknown-unknown/release/example_wasm.wasm --out-dir ./dist --target nodejs
```
