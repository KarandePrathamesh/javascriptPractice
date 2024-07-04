// 5. Operators   (operator--> +,- etc. , operands--> a, b etc.)

    // 1.arithmatic operators --> + , -, *, /, %
    var a = 10;
    var b = 5;
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);

    // 2.assignment operators --> =, +=, -=, *=, /=, %=
    var c = 30;
    c += 2;    // c = c + 2;
    console.log(c);
    
    c-=1;
    console.log(c);
    
    c*= 2;
    console.log(c);

    c/= 2;
    console.log(c);

    c%= 2;
    console.log(c);
    
    // 3.comparison/ realational operators --> ==, ===, >, <, <=, >=
    var x=2;
    var y=5;
    console.log(x==y);
    console.log(x===y);
    console.log(x>y);
    console.log(x<y);
    console.log(x>=y);
    console.log(x<=y);
    
    //4.logical operators --> &&, ||, !
    //logical AND
    console.log(true && true);
    console.log(true && false);
    console.log(false && true);
    console.log(false && false);
    
    //logical OR
    console.log(true || true);
    console.log(true || false);
    console.log(false || true);
    
    //logical OR
    console.log(!false);
    console.log(!true);