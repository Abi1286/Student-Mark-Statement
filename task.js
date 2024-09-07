function home() {
    let password = prompt("Enter your password:")
    if (password == "admin") {
        home1()
        function home1() {
            let stand = prompt("Are You 10th [or] 12th:")
            if (stand == "10") {
                board1()
            }
            else if (stand == "12") {
                board2()
            }
            else {
                console.log("wrong");
                home1()

            }
        }

    }
    else {
        console.log("Wrong password")
        home()
    }
}
home()
function board1() {
    let board = prompt("Enter your board[SSLC]/[CBSC]:")
    if (board == "sslc") {
        let name = prompt("Enter your name:")
        let reg = prompt("Enter your reg number:")
        let dob = prompt("Enter your date of birth:")
        let clas = prompt("Enter your section:")
        alert("SUBJECT MARK DETAILS")
        function t1() {
            let ta = prompt("Tamil Mark:")
            ta = parseInt(ta)
            if (Number(ta) <= 75) {
                e1()
                function e1() {
                    let en = prompt("English Mark:")
                    en = parseInt(en)
                    if (Number(en) <= 75) {
                        m1()
                        function m1()
                        {
                            let ma = prompt("Maths Mark:")
                            ma = parseInt(ma)
                            if (Number(ma) <= 75) {
                                sc1()
                                function sc1()
                                {
                                    let sci = prompt("Science Mark:")
                                    sci = parseInt(sci)
                                    if (Number(sci) <= 75) {
                                        s1()
                                        function s1()
                                        {
                                            let so = prompt("Social Mark:")
                                            so = parseInt(so)
                                            console.log("############");
                                            console.log("Name:" + name + "             " + "REG NO:" + reg);
                                            console.log("CLASS:" + clas + "              " + "DATE OF BIRTH:" + dob);
                                            console.log("MARK STATEMENT");

                                            if (ta + 25 >= 80) {
                                                console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: A");
                                            
                                            }
                                            else if (ta + 25 >= 60) {
                                                console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: B");
                                            }
                                            else if (ta + 25 >= 40) {
                                                console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: C");
                                            }
                                            else if (ta + 25 >= 25) {
                                                console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: D");
                                            }
                                            //
                                            if (en + 25 >= 80) {
                                                console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                                            
                                            }
                                            else if (en + 25 >= 60) {
                                                console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: B");
                                            }
                                            else if (en + 25 >= 40) {
                                                console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: C");
                                            }
                                            else if (en + 25 >= 25) {
                                                console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: D");
                                            }
                                            //
                                            if (ma + 25 >= 80) {
                                                console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                                            
                                            }
                                            else if (ma + 25 >= 60) {
                                                console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: B");
                                            }
                                            else if (ma + 25 >= 40) {
                                                console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: C");
                                            }
                                            else if (ma + 25 >= 25) {
                                                console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: D");
                                            }
                                            if (sci + 25 >= 80) {
                                                console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: A");
                                            
                                            }
                                            else if (sci + 25 >= 60) {
                                                console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: B");
                                            }
                                            else if (sci + 25 >= 40) {
                                                console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: C");
                                            }
                                            else if (sci + 25 >= 25) {
                                                console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: D");
                                            }
                                            //
                                            if (so + 25 >= 80) {
                                                console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: A");
                                            
                                            }
                                            else if (so + 25 >= 60) {
                                                console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: B");
                                            }
                                            else if (so + 25 >= 40) {
                                                console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: C");
                                            }
                                            else if (so + 25 >= 25) {
                                                console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: D");
                                            }
                                            console.log("Total Mark=" + "  " + (125 + ta + en + ma + sci + so));
                                                
                                                
                                        }
                                    }
                                    else {
                                        alert("invalide mark");
                                        sc1()
                                    }
                                }
                            }
                            else {
                                alert("invalide mark");
                                m1()
                            }
                        }
                    }
                    else {
                        alert("invalide mark");
                        e1()
                    }
                }
            }
            else {
                alert("invalide mark");
                t1()
            }
        }
        t1()
    }
    else if (board == "cbsc") {
        let name = prompt("Enter your name:")
        let reg = prompt("Enter your reg number:")
        let dob = prompt("Enter your date of birth:")
        let clas = prompt("Enter your section:")
        console.log("SUBJECT MARK DETAILS")
        function hi1()
        {
            let hi = prompt("Hindi Mark:")
            hi = parseInt(hi)
            if (Number(hi) <= 75) {
                e2()
                function e2()
                {                
                    let en = prompt("English Mark:")
                    en = parseInt(en)
                    if (Number(en) <= 75) {
                        m2()
                        function m2()
                        {
                            let ma = prompt("Maths Mark:")
                            ma = parseInt(ma)
                            if (Number(ma) <= 75) {
                                sc2()
                                function sc2()
                                {
                                    let sci = prompt("Science Mark:")
                                    sci = parseInt(sci)
                                    if (Number(sci) <= 75) {
                                        let so = prompt("Social Mark:")
                                        so = parseInt(so)
                                        console.log("############");
                                        console.log("Name:" + name + "             " + "REG NO:" + reg);
                                        console.log("CLASS:" + clas + "              " + "DATE OF BIRTH:" + dob);
                                        console.log("MARK STATEMENT");
                                        if (hi + 25 >= 80) {
                                            console.log("Hindi     =" + hi + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + hi) + "      " + "Grate: A");
                                        
                                        }
                                        else if (hi + 25 >= 60) {
                                            console.log("Hindi     =" + hi + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + hi) + "      " + "Grate: B");
                                        }
                                        else if (hi + 25 >= 40) {
                                            console.log("Hindi     =" + hi + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + hi) + "      " + "Grate: C");
                                        }
                                        else if (hi + 25 >= 25) {
                                            console.log("Hindil    =" + hi + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + hi) + "      " + "Grate: D");
                                        }
                                        //
                                        if (en + 25 >= 80) {
                                            console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                                        
                                        }
                                        else if (en + 25 >= 60) {
                                            console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: B");
                                        }
                                        else if (en + 25 >= 40) {
                                            console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: C");
                                        }
                                        else if (en + 25 >= 25) {
                                            console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: D");
                                        }
                                        //
                                        if (ma + 25 >= 80) {
                                            console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                                        
                                        }
                                        else if (ma + 25 >= 60) {
                                            console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: B");
                                        }
                                        else if (ma + 25 >= 40) {
                                            console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: C");
                                        }
                                        else if (ma + 25 >= 25) {
                                            console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: D");
                                        }
                                        if (sci + 25 >= 80) {
                                            console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: A");
                                        
                                        }
                                        else if (sci + 25 >= 60) {
                                            console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: B");
                                        }
                                        else if (sci + 25 >= 40) {
                                            console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: C");
                                        }
                                        else if (sci + 25 >= 25) {
                                            console.log("Science   =" + sci + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + sci) + "      " + "Grate: D");
                                        }
                                        //
                                        if (so + 25 >= 80) {
                                            console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: A");
                                        
                                        }
                                        else if (so + 25 >= 60) {
                                            console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: B");
                                        }
                                        else if (so + 25 >= 40) {
                                            console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: C");
                                        }
                                        else if (so + 25 >= 25) {
                                            console.log("Social    =" + so + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + so) + "      " + "Grate: D");
                                        }
                                        console.log("Total Mark=" + "  " + (125 + hi + en + ma + sci + so)+"     "+"BOARD CBSC");
                                    }
                                    else {
                                        alert("invalide mark");
                                        sc2()
                                    }
                                }
                            }
                            else {
                                alert("invalide mark");
                                m2()
                            }
                        }
                    }
                    else {
                        alert("invalide mark");
                        e2()
                    }
                }
            }
            else {
                alert("invalide mark");
                hi1()
            }
        }
        hi1()

    }
    else {
        alert("invalide");
        board1()

    }

}
function group() {
    console.log("GROUP DETAILS");
    let grou = prompt("Enter your group[computer]/[biology]/[commerce]")
    if (grou == "computer") {
        cs()
    }
    else if (grou == "biology") {
        bio()
    }
    else if (grou == "commerce") {
        comm()
    }
    else {
        console.log("wrong group");
        group()

    }

}
function cs() {
    let name = prompt("Enter your name:")
    let reg = prompt("Enter your reg number:")
    let dob = prompt("Enter your date of birth:")
    let clas = prompt("Enter your section:")
    console.log("SUBJECT MARK DETAILS")
    function t3()
    {
        let ta = prompt("Tamil Mark:")
        ta = parseInt(ta)
        if (Number(ta) <= 75) {
            e3()
            function e3()
            {
                let en = prompt("English Mark:")
                en = parseInt(en)
                if (Number(en) <= 75) {
                    m3()
                    function m3()
                    {
                        let ma = prompt("Maths Mark:")
                        ma = parseInt(ma)
                        if (Number(ma) <= 75) {
                            cs3()
                            function cs3()
                            {
                                let cs = prompt("Computer Science Mark:")
                                cs = parseInt(cs)
                                if (Number(cs) <= 75) {
                                    p3()
                                    function p3()
                                    {
                                        let phy = prompt("Physics Mark:")
                                        phy = parseInt(phy)
                                        if (phy <= 75) {
                                            ch3()
                                            function ch3()
                                            {
                                                let chy = prompt("Chemistry Mark:")
                                                chy = parseInt(chy)
                                                if (chy <= 75) {
                                                    console.log("############");
                                                    
                                                    //
                                                    console.log("Name:" + name + "        " + "REG NO:" + reg);
                                                    console.log("CLASS:" + clas + "        " + "DATE OF BIRTH:" + dob);
                                                    console.log("MARK STATEMENT");
                                                    if (ta + 25 >= 80) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ta + 25 >= 60) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: B");
                                                    }
                                                    else if (ta + 25 >= 40) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: C");
                                                    }
                                                    else if (ta + 25 >= 25) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (en + 25 >= 80) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (en + 25 >= 60) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: B");
                                                    }
                                                    else if (en + 25 >= 40) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: C");
                                                    }
                                                    else if (en + 25 >= 25) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (ma + 25 >= 80) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ma + 25 >= 60) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: B");
                                                    }
                                                    else if (ma + 25 >= 40) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: C");
                                                    }
                                                    else if (ma + 25 >= 25) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: D");
                                                    }
                                                    if (cs + 25 >= 80) {
                                                        console.log("Computer Science =" + cs + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + cs) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (cs + 25 >= 60) {
                                                        console.log("Computer Science =" + cs + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + cs) + "      " + "Grate: B");
                                                    }
                                                    else if (cs + 25 >= 40) {
                                                        console.log("Computer Science =" + cs + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + cs) + "      " + "Grate: C");
                                                    }
                                                    else if (cs + 25 >= 25) {
                                                        console.log("Computer Science =" + cs + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + cs) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (phy + 25 >= 80) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (phy + 25 >= 60) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: B");
                                                    }
                                                    else if (phy + 25 >= 40) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: C");
                                                    }
                                                    else if (phy + 25 >= 25) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: D");
                                                    }
                                                    if (chy + 25 >= 80) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (chy + 25 >= 60) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: B");
                                                    }
                                                    else if (chy + 25 >= 40) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: C");
                                                    }
                                                    else if (chy + 25 >= 25) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: D");
                                                    }
                                                    console.log("Total=" + "  " + (125 + ta + en + ma + cs + phy +chy));
                                                }
                                                else {
                                                    console.log("invalide mark");
                                                    ch3()
                                                }
                                            }
                                        }
                                        else {
                                            console.log("invalide mark");
                                            p3()
                                        }
                                    }

                                }
                                else {
                                    console.log("invalide mark");
                                    cs3()
                                }
                            }
                        }
                        else {
                            console.log("invalide mark");
                            m3()
                        }
                    }
                }
                else {
                    console.log("invalide mark");
                    e3()
                }
            }
        }
        else {
            console.log("invalide mark");
            t3()
        }
    }
    t3()

}
function bio() {
    let name = prompt("Enter your name:")
    let reg = prompt("Enter your reg number:")
    let dob = prompt("Enter your date of birth:")
    let clas = prompt("Enter your section:")
    console.log("SUBJECT MARK DETAILS")
    let ta = prompt("Tamil Mark:")
    ta = parseInt(ta)
    if (Number(ta) <= 75) {
        let en = prompt("English Mark:")
        en = parseInt(en)
        if (Number(en) <= 75) {
            let ma = prompt("Maths Mark:")
            ma = parseInt(ma)
            if (Number(ma) <= 75) {
                let bio = prompt("Computer Science Mark:")
                bio = parseInt(bio)
                if (Number(bio) <= 75) {
                    let phy = prompt("Physics Mark:")
                    phy = parseInt(phy)
                    if (phy <= 75) {
                        let che = prompt("Chemistry Mark:")
                        che = parseInt(che)
                        if (che <= 75) {
                            console.log("############");
                            console.log("Name:" + name + "        " + "REG NO:" + reg);
                            console.log("CLASS:" + clas + "        " + "DATE OF BIRTH:" + dob);
                            console.log("MARK STATEMENT");
                            console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: A");
                            console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                            console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                            console.log("Biology =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: A");
                            console.log("Physis =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: A");
                            console.log("Chemistry =" + che + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + che) + "      " + "Grate: A");
                        }
                        else {
                            console.log("invalide mark");
                        }
                    }
                    else {
                        console.log("invalide mark");
                    }

                }
                else {
                    console.log("invalide mark");
                }
            }
            else {
                console.log("invalide mark");
            }
        }
        else {
            console.log("invalide mark");
        }
    }
    else {
        console.log("invalide mark");
    }
}
function comm() {
    let name = prompt("Enter your name:")
    let reg = prompt("Enter your reg number:")
    let dob = prompt("Enter your date of birth:")
    let clas = prompt("Enter your section:")
    console.log("SUBJECT MARK DETAILS")
    //
    function t4()
    {
        let ta = prompt("Tamil Mark:")
        ta = parseInt(ta)
        if (Number(ta) <= 75) {
            e4()
            function e4()
            {
                let en = prompt("English Mark:")
                en = parseInt(en)
                if (Number(en) <= 75) {
                    m4()
                    function m4()
                    {
                        let ma = prompt("Maths Mark:")
                        ma = parseInt(ma)
                        if (Number(ma) <= 75) {
                            cs4()
                            function cs4()
                            {
                                let bio = prompt("Biology Mark:")
                                bio = parseInt(bio)
                                if (Number(bio) <= 75) {
                                    p4()
                                    function p4()
                                    {
                                        let phy = prompt("Physics Mark:")
                                        phy = parseInt(phy)
                                        if (phy <= 75) {
                                            ch4()
                                            function ch4()
                                            {
                                                let chy = prompt("Chemistry Mark:")
                                                chy = parseInt(chy)
                                                if (chy <= 75) {
                                                    console.log("############");
                                                    
                                                    //
                                                    console.log("Name:" + name + "        " + "REG NO:" + reg);
                                                    console.log("CLASS:" + clas + "        " + "DATE OF BIRTH:" + dob);
                                                    console.log("MARK STATEMENT");
                                                    if (ta + 25 >= 80) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ta + 25 >= 60) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: B");
                                                    }
                                                    else if (ta + 25 >= 40) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: C");
                                                    }
                                                    else if (ta + 25 >= 25) {
                                                        console.log("Tamil =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (en + 25 >= 80) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (en + 25 >= 60) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: B");
                                                    }
                                                    else if (en + 25 >= 40) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: C");
                                                    }
                                                    else if (en + 25 >= 25) {
                                                        console.log("English =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (ma + 25 >= 80) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ma + 25 >= 60) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: B");
                                                    }
                                                    else if (ma + 25 >= 40) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: C");
                                                    }
                                                    else if (ma + 25 >= 25) {
                                                        console.log("Maths =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: D");
                                                    }
                                                    if (bio + 25 >= 80) {
                                                        console.log("Biology =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (bio + 25 >= 60) {
                                                        console.log("Biology =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: B");
                                                    }
                                                    else if (bio + 25 >= 40) {
                                                        console.log("Biology =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: C");
                                                    }
                                                    else if (bio + 25 >= 25) {
                                                        console.log("Biology =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (phy + 25 >= 80) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (phy + 25 >= 60) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: B");
                                                    }
                                                    else if (phy + 25 >= 40) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: C");
                                                    }
                                                    else if (phy + 25 >= 25) {
                                                        console.log("Physics =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: D");
                                                    }
                                                    if (chy + 25 >= 80) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (chy + 25 >= 60) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: B");
                                                    }
                                                    else if (chy + 25 >= 40) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: C");
                                                    }
                                                    else if (chy + 25 >= 25) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: D");
                                                    }
                                                    console.log("Total=" + "  " + (125 + ta + en + ma + cs + phy +chy));
                                                }
                                                else {
                                                    console.log("invalide mark");
                                                    ch4()
                                                }
                                            }
                                        }
                                        else {
                                            console.log("invalide mark");
                                            p4()
                                        }
                                    }

                                }
                                else {
                                    console.log("invalide mark");
                                    cs4()
                                }
                            }
                        }
                        else {
                            console.log("invalide mark");
                            m4()
                        }
                    }
                }
                else {
                    console.log("invalide mark");
                    e4()
                }
            }
        }
        else {
            console.log("invalide mark");
            t4()
        }
    }
    t4()
}

function board2() {
    let cbsb = prompt("Enter your board[sslc]/[cbsc]:")
    if (cbsb == "sslc") {
        group()
    }
    else if (cbsb == "cbsc") {
        group1()
    }
    else {
        console.log("invalide");
        board2()
    }
}
function group1() {
    console.log("GROUP DETAILS");
    let grou = prompt("Enter your group[computer]/[biology]/[commerce]")
    if (grou == "computer") {
        cs1()
    }
    else if (grou == "biology") {
        bio1()
    }
    else if (grou == "commerce") {
        comm1()
    }
    else {
        console.log("wrong group");
        group1()

    }

}
function cs1() {
    let name = prompt("Enter your name:")
    let reg = prompt("Enter your reg number:")
    let dob = prompt("Enter your date of birth:")
    let clas = prompt("Enter your section:")
    console.log("SUBJECT MARK DETAILS")
    //
    function t5()
    {
        let ta = prompt("Tamil Mark:")
        ta = parseInt(ta)
        if (Number(ta) <= 75) {
            e5()
            function e5()
            {
                let en = prompt("English Mark:")
                en = parseInt(en)
                if (Number(en) <= 75) {
                    m5()
                    function m5()
                    {
                        let ma = prompt("Maths Mark:")
                        ma = parseInt(ma)
                        if (Number(ma) <= 75) {
                            cs5()
                            function cs5()
                            {
                                let bio = prompt("CS Mark:")
                                bio = parseInt(bio)
                                if (Number(bio) <= 75) {
                                    p5()
                                    function p5()
                                    {
                                        let phy = prompt("Physics Mark:")
                                        phy = parseInt(phy)
                                        if (phy <= 75) {
                                            ch5()
                                            function ch5()
                                            {
                                                let chy = prompt("Chemistry Mark:")
                                                chy = parseInt(chy)
                                                if (chy <= 75) {
                                                    console.log("############");
                                                    
                                                    //
                                                    console.log("Name:" + name + "             " + "REG NO:" + reg);
                                                    console.log("CLASS:" + clas + "              " + "DATE OF BIRTH:" + dob);
                                                    console.log("MARK STATEMENT");
                                                    if (ta + 25 >= 80) {
                                                        console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ta + 25 >= 60) {
                                                        console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: B");
                                                    }
                                                    else if (ta + 25 >= 40) {
                                                        console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: C");
                                                    }
                                                    else if (ta + 25 >= 25) {
                                                        console.log("Tamil     =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (en + 25 >= 80) {
                                                        console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (en + 25 >= 60) {
                                                        console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: B");
                                                    }
                                                    else if (en + 25 >= 40) {
                                                        console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: C");
                                                    }
                                                    else if (en + 25 >= 25) {
                                                        console.log("English   =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (ma + 25 >= 80) {
                                                        console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ma + 25 >= 60) {
                                                        console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: B");
                                                    }
                                                    else if (ma + 25 >= 40) {
                                                        console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: C");
                                                    }
                                                    else if (ma + 25 >= 25) {
                                                        console.log("Maths     =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: D");
                                                    }
                                                    if (bio + 25 >= 80) {
                                                        console.log("CS        =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (bio + 25 >= 60) {
                                                        console.log("CS        =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: B");
                                                    }
                                                    else if (bio + 25 >= 40) {
                                                        console.log("CS        =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: C");
                                                    }
                                                    else if (bio + 25 >= 25) {
                                                        console.log("CS        =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (phy + 25 >= 80) {
                                                        console.log("Physics   =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (phy + 25 >= 60) {
                                                        console.log("Physics   =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: B");
                                                    }
                                                    else if (phy + 25 >= 40) {
                                                        console.log("Physics   =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: C");
                                                    }
                                                    else if (phy + 25 >= 25) {
                                                        console.log("Physics   =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: D");
                                                    }
                                                    if (chy + 25 >= 80) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (chy + 25 >= 60) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: B");
                                                    }
                                                    else if (chy + 25 >= 40) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: C");
                                                    }
                                                    else if (chy + 25 >= 25) {
                                                        console.log("Chemistry =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: D");
                                                    }
                                                    console.log("Total Mark="+ (125 + ta + en + ma + bio + phy +chy));
                                                }
                                                else {
                                                    alert("invalide mark");
                                                    ch5()
                                                }
                                            }
                                        }
                                        else {
                                            alert("invalide mark");
                                            p5()
                                        }
                                    }

                                }
                                else {
                                    alert("invalide mark");
                                    cs5()
                                }
                            }
                        }
                        else {
                            alert("invalide mark");
                            m5()
                        }
                    }
                }
                else {
                    alert("invalide mark");
                    e5()
                }
            }
        }
        else {
            alert("invalide mark");
            t5()
        }
    }
    t5()
    
}
function bio1() {
    let name = prompt("Enter your name:")
    let reg = prompt("Enter your reg number:")
    let dob = prompt("Enter your date of birth:")
    let clas = prompt("Enter your section:")
    console.log("SUBJECT MARK DETAILS")
    //
    function t6()
    {
        let ta = prompt("Tamil Mark:")
        ta = parseInt(ta)
        if (Number(ta) <= 75) {
            e6()
            function e6()
            {
                let en = prompt("English Mark:")
                en = parseInt(en)
                if (Number(en) <= 75) {
                    m6()
                    function m6()
                    {
                        let ma = prompt("Maths Mark:")
                        ma = parseInt(ma)
                        if (Number(ma) <= 75) {
                            cs6()
                            function cs6()
                            {
                                let bio = prompt("Biology Mark:")
                                bio = parseInt(bio)
                                if (Number(bio) <= 75) {
                                    p6()
                                    function p6()
                                    {
                                        let phy = prompt("Physics Mark:")
                                        phy = parseInt(phy)
                                        if (phy <= 75) {
                                            ch6()
                                            function ch6()
                                            {
                                                let chy = prompt("Chemistry Mark:")
                                                chy = parseInt(chy)
                                                if (chy <= 75) {
                                                    console.log("############");
                                                    
                                                    //
                                                    console.log("Name:" + name + "        " + "REG NO:" + reg);
                                                    console.log("CLASS:" + clas + "        " + "DATE OF BIRTH:" + dob);
                                                    console.log("MARK STATEMENT");
                                                    if (ta + 25 >= 80) {
                                                        console.log("Tamil    =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ta + 25 >= 60) {
                                                        console.log("Tamil    =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: B");
                                                    }
                                                    else if (ta + 25 >= 40) {
                                                        console.log("Tamil    =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: C");
                                                    }
                                                    else if (ta + 25 >= 25) {
                                                        console.log("Tamil    =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (en + 25 >= 80) {
                                                        console.log("English  =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (en + 25 >= 60) {
                                                        console.log("English  =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: B");
                                                    }
                                                    else if (en + 25 >= 40) {
                                                        console.log("English  =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: C");
                                                    }
                                                    else if (en + 25 >= 25) {
                                                        console.log("English  =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (ma + 25 >= 80) {
                                                        console.log("Maths    =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ma + 25 >= 60) {
                                                        console.log("Maths    =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: B");
                                                    }
                                                    else if (ma + 25 >= 40) {
                                                        console.log("Maths    =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: C");
                                                    }
                                                    else if (ma + 25 >= 25) {
                                                        console.log("Maths    =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: D");
                                                    }
                                                    if (bio + 25 >= 80) {
                                                        console.log("Biology  =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (bio + 25 >= 60) {
                                                        console.log("Biology  =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: B");
                                                    }
                                                    else if (bio + 25 >= 40) {
                                                        console.log("Biology  =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: C");
                                                    }
                                                    else if (bio + 25 >= 25) {
                                                        console.log("Biology  =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (phy + 25 >= 80) {
                                                        console.log("Physics  =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (phy + 25 >= 60) {
                                                        console.log("Physics  =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: B");
                                                    }
                                                    else if (phy + 25 >= 40) {
                                                        console.log("Physics  =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: C");
                                                    }
                                                    else if (phy + 25 >= 25) {
                                                        console.log("Physics  =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: D");
                                                    }
                                                    if (chy + 25 >= 80) {
                                                        console.log("Chemistry=" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (chy + 25 >= 60) {
                                                        console.log("Chemistry=" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: B");
                                                    }
                                                    else if (chy + 25 >= 40) {
                                                        console.log("Chemistry=" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: C");
                                                    }
                                                    else if (chy + 25 >= 25) {
                                                        console.log("Chemistry=" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: D");
                                                    }
                                                    console.log("Total    =" + "  " + (125 + ta + en + ma + bio + phy +chy)+"     "+"BOARD CBSC");
                                                }
                                                else {
                                                    alert("invalide mark");
                                                    ch6()
                                                }
                                            }
                                        }
                                        else {
                                            alert("invalide mark");
                                            p6()
                                        }
                                    }

                                }
                                else {
                                    alert("invalide mark");
                                    cs6()
                                }
                            }
                        }
                        else {
                            alert("invalide mark");
                            m6()
                        }
                    }
                }
                else {
                    alert("invalide mark");
                    e6()
                }
            }
        }
        else {
            alert("invalide mark");
            t6()
        }
    }
    t6()
}
function comm1() {
    let name = prompt("Enter your name:")
    let reg = prompt("Enter your reg number:")
    let dob = prompt("Enter your date of birth:")
    let clas = prompt("Enter your section:")
    console.log("SUBJECT MARK DETAILS")
    //
    function t7()
    {
        let ta = prompt("Tamil Mark:")
        ta = parseInt(ta)
        if (Number(ta) <= 75) {
            e7()
            function e7()
            {
                let en = prompt("English Mark:")
                en = parseInt(en)
                if (Number(en) <= 75) {
                    m7()
                    function m7()
                    {
                        let ma = prompt("Commerce Mark:")
                        ma = parseInt(ma)
                        if (Number(ma) <= 75) {
                            cs7()
                            function cs7()
                            {
                                let bio = prompt("Ergonomics Mark:")
                                bio = parseInt(bio)
                                if (Number(bio) <= 75) {
                                    p7()
                                    function p7()
                                    {
                                        let phy = prompt("Histry Mark:")
                                        phy = parseInt(phy)
                                        if (phy <= 75) {
                                            ch7()
                                            function ch7()
                                            {
                                                let chy = prompt("Financial Mark:")
                                                chy = parseInt(chy)
                                                if (chy <= 75) {
                                                    console.log("############");
                                                    
                                                    //
                                                    console.log("Name:" + name + "        " + "REG NO:" + reg);
                                                    console.log("CLASS:" + clas + "        " + "DATE OF BIRTH:" + dob);
                                                    console.log("MARK STATEMENT");
                                                    if (ta + 25 >= 80) {
                                                        console.log("Tamil      =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ta + 25 >= 60) {
                                                        console.log("Tamil      =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: B");
                                                    }
                                                    else if (ta + 25 >= 40) {
                                                        console.log("Tamil      =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: C");
                                                    }
                                                    else if (ta + 25 >= 25) {
                                                        console.log("Tamil      =" + ta + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ta) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (en + 25 >= 80) {
                                                        console.log("English    =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (en + 25 >= 60) {
                                                        console.log("English    =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: B");
                                                    }
                                                    else if (en + 25 >= 40) {
                                                        console.log("English    =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: C");
                                                    }
                                                    else if (en + 25 >= 25) {
                                                        console.log("English    =" + en + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + en) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (ma + 25 >= 80) {
                                                        console.log("Commerce   =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (ma + 25 >= 60) {
                                                        console.log("Commerce   =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: B");
                                                    }
                                                    else if (ma + 25 >= 40) {
                                                        console.log("Commerce   =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: C");
                                                    }
                                                    else if (ma + 25 >= 25) {
                                                        console.log("Commerce   =" + ma + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + ma) + "      " + "Grate: D");
                                                    }
                                                    if (bio + 25 >= 80) {
                                                        console.log("Ergonomics =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (bio + 25 >= 60) {
                                                        console.log("Ergonomics =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: B");
                                                    }
                                                    else if (bio + 25 >= 40) {
                                                        console.log("Ergonomics =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: C");
                                                    }
                                                    else if (bio + 25 >= 25) {
                                                        console.log("Ergonomics =" + bio + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + bio) + "      " + "Grate: D");
                                                    }
                                                    //
                                                    if (phy + 25 >= 80) {
                                                        console.log("Histry     =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (phy + 25 >= 60) {
                                                        console.log("Histry     =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: B");
                                                    }
                                                    else if (phy + 25 >= 40) {
                                                        console.log("Histry     =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: C");
                                                    }
                                                    else if (phy + 25 >= 25) {
                                                        console.log("Histry     =" + phy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + phy) + "      " + "Grate: D");
                                                    }
                                                    if (chy + 25 >= 80) {
                                                        console.log("Finnacial  =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: A");
                                                    
                                                    }
                                                    else if (chy + 25 >= 60) {
                                                        console.log("Finnacial  =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: B");
                                                    }
                                                    else if (chy + 25 >= 40) {
                                                        console.log("Finnacial  =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: C");
                                                    }
                                                    else if (chy + 25 >= 25) {
                                                        console.log("Finnacial  =" + chy + "    " + "INTERNAL MARK:" + 25 + "     " + "TOTAL:" + (25 + chy) + "      " + "Grate: D");
                                                    }
                                                    console.log("Total Mark =" + "     " + (125 + ta + en + ma + bio + phy +chy) +"       "+ "BOARD CBSC");
                                                }
                                                else {
                                                    alert("invalide mark");
                                                    ch7()
                                                }
                                            }
                                        }
                                        else {
                                            alert("invalide mark");
                                            p7()
                                        }
                                    }

                                }
                                else {
                                    alert("invalide mark");
                                    cs7()
                                }
                            }
                        }
                        else {
                            alert("invalide mark");
                            m7()
                        }
                    }
                }
                else {
                    alert("invalide mark");
                    e7()
                }
            }
        }
        else {
            alert("invalide mark");
            t7()
        }
    }
    t7()
    
}