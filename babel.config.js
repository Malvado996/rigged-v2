module.exports = function (api) {
    api.cache(true);

    return {
        presets: ["next/babel"],
        plugins: [
            // ["react-compiler", {}],  // ← Enables compiler everywhere
        ],
    };
};