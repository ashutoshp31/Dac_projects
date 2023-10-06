package utils;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.app.banking.*;

import custom_excpetions.InvalidInputException;

public class BankRulesValidation  {

	
	public static void checkForDup(ArrayList<BankAccount> list, int accNo) throws InvalidInputException {
		if( list.contains(new BankAccount(accNo)))
			throw new InvalidInputException("Duplicate account found...please enter diferent account number");
		else
			System.out.println("No duplicate accounts found");
	}

	
	public static boolean checkForMinBal(ArrayList<BankAccount> list,int accNo,double amount) throws InvalidInputException {
		BankAccount b = list.get(list.indexOf(new BankAccount(accNo)));		
		double minBal= b.getAccountType().getMinBalance();
		
		if ((b.getAccountBalance()-amount)< minBal)
			throw new InvalidInputException("Amount less than minimum balance. Cannot perform operation");
		System.out.println("Ok.Withdraw operation can be done");
		return true;
	}
	
//	public static boolean checkForNegativeBalance(double amountToWithDraw ,double balanceAfterWithdrawal) throws InvalidInputException{
//		if(amountToWithDraw < balanceAfterWithdrawal)
//			throw new InvalidInputException("Cannot withdraw as balance goes to negative");
//			System.out.println("Ok. operation can be done");
//			return true;
//	}
	
}
