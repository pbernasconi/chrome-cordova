describe('Keyboard plugin', function() {
    it('should set isVisible as false on close', function() {
        window.cordova.plugins.Keyboard.close();
        expect(window.cordova.plugins.Keyboard.isVisible).toBe(false);
    });

    it('should set isVisible as true on show', function() {
        window.cordova.plugins.Keyboard.show();
        expect(window.cordova.plugins.Keyboard.isVisible).toBe(true);
    });
});