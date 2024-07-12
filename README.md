# UnAnswGen: A Systematic Approach for Generating Unanswerable Questions in Machine Reading Comprehension
<div align="center">
    <img src="https://raw.githubusercontent.com/Julien-ser/UnAnswGen/main/workflow.png", width="500", alt="ReQue: Workflow Diagram">
</div>

## Unanswerable Question Generation
The [`Unanswerable Question Generation/`](./Unanswerable%20Question%20Generation/) folder contains all of the python notebook files that involve generating unanswerable questions of all types(negation, mutual exclusion, entity swap, number swap, no information and antonym) based on the SQUADv2 train and dev datasets. 

## Question Evaluation
The [`Question Evaluation/`](./Question%20Evaluation/) folder contains the python notebook files involving the assessment and evaluation of the generated unanswerable questions of the previous folder. There are 2 subfolders: (./Evaluation%20by%20MRC%20Models) involves the notebooks associated with evaluating the generated unanswerable questions through 6 MRC models: Electra, Roberta, SgNet, RetroReader, Model2, and Model4, and (./Majority%20Voting/) involves the notebooks that processed and evaluated valid unanswerable questions via majority vote provided by the evaluations from the MRC models.

## Data
The [`Data/`](./Data/) folder contains all of the unanswerable questions of the types: negation, mutual exclusion, entity swap, number swap, no information and antonym, after going through the evaluation code through 6 different MRC models and Majority Voting between these models. 

## Human Evaluation
The [`Human Evaluation/`](./Human%20Evaluation/) folder contains the google apps scripts code for generating google forms based on unanswerable question input data, and the links to the generated forms that were used to allow human experts to verify the accuracy and effectiveness of the generated unanswerable questions.
