# UnAnswGen: A Systematic Approach for Generating Unanswerable Questions in Machine Reading Comprehension
<div align="center">
    <img src="https://user-images.githubusercontent.com/8619934/84823090-c5dd2000-afeb-11ea-8a6a-64d94afed83c.png", width="500", alt="ReQue: Workflow Diagram">
</div>


## Data
The [`Data/`](./Data/) folder contains all of the unanswerable questions of the types: negation, mutual exclusion, entity swap, number swap, no information and antonym, after going through the evaluation code through 6 different MRC models and Majority Voting between these models. 

## Human Evaluation
The [`Human Evaluation/`](./Human%20Evaluation/) folder contains the google apps scripts code for generating google forms based on unanswerable question input data, and the links to the generated forms that were used to allow human experts to verify the accuracy and effectiveness of the generated unanswerable questions.
