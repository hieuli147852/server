const calc = (a,b,p) => {
    /*
        if (a || b || p ) {
                    return &quot;Please provide all parameters&quot; ;
        }
    */
        switch (p) {
            case '+' : {
            return a+b;
            break ;
            }
            case '-' : {
            return a-b;
            break ;
            }
            case '*' : {
            return a*b;
            break ;
            }
            case '/' : {
                    return a/b;
                    break ;
            }
            default :{ return ;}
        }
    }
    exports.calc=calc; //very important line