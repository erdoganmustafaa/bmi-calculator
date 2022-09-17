

function GetValues(){
  let heightValue = document.querySelector("#height").value;
  let weightValue = document.querySelector("#weight").value;
  let gender = document.getElementsByName("gender");
  for(var element in gender){
    if(gender[element].checked){
      let genderElement = gender[element].value;
      returnGender = genderElement;
    }
    
    
  }
    height = heightValue;
    weight = weightValue;
    
    return height,weight,returnGender;
}
function CalculateBMI(){
      console.log(returnGender);
      const resultElement = document.querySelector(".result");

      let result = parseFloat((weight/height/height)*10000).toFixed(2);

      if(returnGender==="male" && result<26){
          resultElement.innerHTML=`
          <img class='image'
          src='https://st.depositphotos.com/1000833/2320/i/950/depositphotos_23207742-stock-photo-slim-man-in-white-t.jpg'
          style="width: 200px; height:250px"></img>
            <p class="">Your BMI Score ${result}. So You are not fat boy.</p>
        `
        };
      if(returnGender==="male" && result>26){
          resultElement.innerHTML=`
          <img class='image' src='https://c8.alamy.com/comp/D0T8FJ/happy-fat-man-in-a-blue-shirt-D0T8FJ.jpg'
          style="width: 200px; height:250px"></img>
            <p class="">Your BMI Score ${result}. You are <b>FAT</b> boy.</p>
        `
        
      }
      if(returnGender==="female" && result<26){
        
          resultElement.innerHTML=`
          <img class='image'
          src='https://img.freepik.com/premium-photo/dieting-concept-with-oversized-jeans-skinny-woman-too-large-jeans-concept-successful-weight-loss-thin-girl-big-trousers-gray-background_265223-45778.jpg?w=2000'
          style="width: 200px; height:250px"></img>
            <p class="">Your BMI Score ${result}. You are a fit woman!</p>
        `
        };
        if(returnGender==="female" && result>26){
          
          resultElement.innerHTML=`
          <img class='image' src='https://st.depositphotos.com/1763233/3200/i/950/depositphotos_32009311-stock-photo-overweight-woman-dressed-in-swimsuit.jpg'
          style="width: 200px; height:250px"></img>
            <p class="">Your BMI Score ${result}. I'm sorry but you are <b>FAT</b></p>
        `
        }
      
      

      
      
      
    
}