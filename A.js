//1. Write a JS code to print numbers from 1 to 10............................
// for(let n=1;n<=10;n++)
// {
//     console.log(n);
// }
//2. Write a JS code to print a 2D array......................................
// let a = new Array(3);
// for (let i = 0; i < a.length; i++) {
//     a[i] = new Array(2);
// }
// a[0][0] = "1";
// a[0][1] = "2";
// a[1][0] = "3";
// a[1][1] = "4";
// a[2][0] = "5";
// a[2][1] = "6";
// console.log(a);

//3. Write a JS code to print Even numbers in given array.........................................
// const a=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]%2==0)
//     {
//         console.log(a[i]);
//     }
// }

//4. Write a JS code to delete all occurrence of element in given array.............................................
// const a=[6,2,3,5,5,6,7,8,5,8];
// for(let i=0;i<a.length;i++)
// {
//     for(let j=i+1;j<a.length;j++)
//     {
//         if(a[i]==a[j])
//         {
//             let k=j;
//             while(k<a.length)
//             {
//                 a[k]=a[k+1];
//                 k++;
//             }
//             a.length--;
//         }        
//     }
// }
// console.log(a);
//6. Write a JS code to find the power of a number using for loop.................................................
// let n=4;
// let p=3;
// let ans=1;
// for(let i=0;i<p;i++)
// {
//     ans=ans*n;
// }
// console.log(ans);
//7. Write a JS code to print a pattern using for loop.........................................
// let n=5;    
// let s="";                                                                                   
// for(let i=0;i<n;i++)                                                                         //          *
// {                                                                                            //          **
//     s="";                                                                                    //          ***
//     for(let j=0;j<=i;j++)                                                                    //          ****
//     {                                                                                        //          *****
//         s+="*";                                                                              //          *****
//     }                                                                                        //          ****
//     console.log(s);                                                                          //          ***
// }                                                                                            //          **
// for(let i=n;i>0;i--)                                                                         //          *                                                
// {
//     s="";
//     for(let j=0;j<=i;j++)
//     {
//         s+="*";
//     }
//     console.log(s); 
// }  
//8. Write a JS code to find the no of digits in a number .........................                                                                     
// let n=67524;
// let c=0;
// while(n>0)
// {
//     n=Math.floor(n/10);
//     c++;
// }
// console.log(c);
//9. Write a JS code to calculate the sum of digits in a number...................................
// let n=6752;
// let c=0;
// while(n>0)
// {
//     let r=n%10;
//     c+=r
//     n=Math.floor(n/10);
// }
// console.log(c);
//10. Write a JS code to find the largest number in an array......................................
// const a=[22,44,77,24,64,40];
// let i=0;
// let k=-99999;
// while(i<a.length)
// {
//     if(a[i]>k)
//     {
//         k=a[i];
//     }
//     i++;
// }
// console.log(k);
//11. Write a JS code to find the number of zeros in 2D Matrix........................................................................
// const a=[[2,0],[5,0],[4,5],[8,0]];
// let c=0;
// for(let i=0;i<a.length;i++)
// {
//     for(let j=0;j<a[i].length;j++)
//     {
//         if(a[i][j]==0)
//         {
//             c++;
//         }
//     }
// }
// console.log(c);
//12. Write a JS code to find product of two arrays........................................................................
// const a=[2,4,5,6,7,8];
// const b=[5,8,11,44,3,6];
// const c=[];
// for(let i=0;i<a.length;i++)
// {
//     c.push(a[i]*b[i]);
// }
// console.log(c);
//13. Write a JS code to print the Fibonacci series for a given value of N........................................................................
// let n=8;
// let c=1;
// let p=1;
// console.log(c);
// for(let i=0;i<=n;i++)
// {
//     console.log(c);
//     let t=c;
//     c+=p;
//     p=t;
// }
//15. Write a JS code to count all letters in a word........................................................................
// let a="apple";
// console.log(a.length)

//16. Write a JS code to find duplicate values in a given array........................................................................
// const a=[3,5,6,7,7,3,5];
// for(let i=0;i<a.length;i++)
// {
//     for(j=i+1;j<a.length;j++)
//     {
//         if(a[i]==a[j])
//         {
//             console.log(a[i]);
//         }
//     }
// }
//17. Write a JS code for binary search algorithm........................................................................
// const a=[2,4,6,7,8,9,11,14,16];
// let s=0;
// let e=a.length-1;
// let k=4;
// while(s<=e)
// {
//     let mid=Math.floor(s+(e-s)/2);
//     if(a[mid]==k)
//     {
//         console.log(mid);
//         break;
//     }
//     else if(a[mid]>k)
//     {
//         e=mid-1;
//     }
//     else{
//         s=mid+1;
//     }
// }