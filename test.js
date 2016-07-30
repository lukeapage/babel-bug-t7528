const a = {
    b: function() {
        switch (c) {
            case 1: {
                if (this.d.length > 1 || this.e({})) {
                    return;
                }

                const f = d('g', function() {
                        f();
                }.bind(this));

                break;
            }
        }
    },
};
