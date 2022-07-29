import styled from 'styled-components'

export const StyledPost = styled.div`
	margin: 0 auto; 
	display:flex;	
   flex-direction:column;
   max-width:350px;
	max-height:400px;
	padding:5px;
	border-radius:20px;
	background-color:beige;
	margin:0px 10px 10px 0px;
	
	& > div {
		display:flex;
		align-items:center;
		justify-content:start;


	   & > img.author-img {
			width: 80px;
         height: 80px;
         border-radius: 50px;
			margin:0px 10px 0px 0px;
	   }
		& > img.icon{
			max-width: 14px;
	      margin:0px 8px 0px 0px;
		}
		& > span{
			margin:0px 0px 0px 0px;
			font-size:14px;
			font-weight:bold;
		}
	}
	& > div.main-info {
		display:flex;
		flex-direction:column;
      margin: 0px 0px 10px 0px;

		& > p{
			justify-content:space-around;
			font-size:16px;
		}

	   & > img.main-img{
		   width:300px;
			height:200px;
			border-radius:20px;
			
		}

	}
	& > div.post-reactions {
		display:flex;
      justify-content:space-around;
		

		& > div{
			display:flex;
			align-items:center;
         

			& > img{
				width: 25px; 
				
			}
			& > img.icon-share{
				min-width:25px
			}
			
		}
	}
`