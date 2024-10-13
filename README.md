

# UnAnswGen: A Systematic Approach for Generating Unanswerable Questions in Machine Reading Comprehension
<div align="center">
    <img src="https://raw.githubusercontent.com/Julien-ser/UnAnswGen/refs/heads/main/workflow.png" width="500" alt="ReQue: Workflow Diagram">
</div>
![alt text](https://raw.githubusercontent.com/Julien-ser/UnAnswGen/refs/heads/main/workflow.png)

## Unanswerable Question Generation
The [`Unanswerable Question Generation/`](./Unanswerable%20Question%20Generation/) folder contains all of the Python notebook files that involve generating unanswerable questions of all types(negation, mutual exclusion, entity swap, number swap, no information, and antonym) based on the SQUAD2.0 train dataset. 

## Question Evaluation
The [`Question Evaluation/`](./Question%20Evaluation/) folder contains the Python notebook files involving the assessment and evaluation of the generated unanswerable questions of the previous folder. There are 2 subfolders: [`Evaluation by MRC Models/`](./Evaluation%20by%20MRC%20Models/) involves the notebooks associated with evaluating the candidate unanswerable questions through 6 MRC models: Electra, Roberta, SgNet, RetroReader, Model2, and Model4, and [`Majority Voting/`](./Majority%20Voting/) involves the notebooks that processed and evaluated final unanswerable questions via majority vote provided by the evaluations from the MRC models.

## Data
The [`Data/`](./Data/) folder contains the final unanswerable questions set including all of the 6 types: negation, mutual exclusion, entity swap, number swap, no information, and antonym, after going through the evaluation code through 6 different MRC models and Majority Voting between these models. 

## Human Evaluation
The [`Human Evaluation/`](./Human%20Evaluation/) folder contains the Google app script codes for generating Google forms based on unanswerable question input data and the links to the generated forms that were used to allow human experts to verify the accuracy and effectiveness of the generated unanswerable questions.
