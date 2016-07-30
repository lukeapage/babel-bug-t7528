    const b = function() {
        switch (c) {
            case 1: {
		// can leave out if()
                if (false) {
                    return;
                }

                const f = function() {
                        f();
                };
                break;
            }
        }
    };
